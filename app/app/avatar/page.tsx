'use client'
import { useState, useRef } from 'react'
import { useAuth } from '@/lib/store'
import { api } from '@/lib/api'
import { Card, Btn, Textarea } from '@/components/ui'
import toast from 'react-hot-toast'
import { Upload, Loader2, CheckCircle, Download, Share2 } from 'lucide-react'

type Step = 'form' | 'generating' | 'done'

const platforms = ['instagram','tiktok','vk','youtube']
const styles    = ['business','casual','expert']
const styleLabels = { business:'💼 Деловой', casual:'😊 Casual', expert:'⭐ Эксперт' }

export default function AvatarPage() {
  const { token } = useAuth()
  const [step, setStep]       = useState<Step>('form')
  const [photoB64, setPhotoB64] = useState<string>('')
  const [photoName, setPhotoName] = useState('')
  const [text, setText]       = useState('')
  const [style, setStyle]     = useState('business')
  const [platform, setPlatform] = useState('instagram')
  const [progress, setProgress] = useState(0)
  const [videoUrl, setVideoUrl] = useState('')
  const [taskId, setTaskId]   = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const pickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (!f) return
    setPhotoName(f.name)
    const reader = new FileReader()
    reader.onload = ev => setPhotoB64((ev.target?.result as string).split(',')[1])
    reader.readAsDataURL(f)
  }

  const generate = async () => {
    if (!photoB64) return toast.error('Загрузи фото')
    if (!text.trim()) return toast.error('Напиши текст')
    setStep('generating')
    setProgress(10)
    try {
      const res = await api.generateAvatar(token!, { photoBase64: photoB64, text, style, platform })
      setTaskId(res.taskId)
      // Poll
      let attempts = 0
      const poll = setInterval(async () => {
        attempts++
        setProgress(Math.min(10 + attempts * 8, 90))
        const s = await api.checkStatus(token!, res.taskId)
        if (s.status === 'ready' && s.videoUrl) {
          clearInterval(poll)
          setVideoUrl(s.videoUrl)
          setStep('done')
          setProgress(100)
        } else if (s.status === 'error') {
          clearInterval(poll)
          toast.error('Ошибка генерации — попробуй снова')
          setStep('form')
        }
        if (attempts > 40) { clearInterval(poll); toast.error('Таймаут — попробуй снова'); setStep('form') }
      }, 4000)
    } catch {
      toast.error('Ошибка — проверь соединение')
      setStep('form')
    }
  }

  if (step === 'generating') return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">Создаём видео...</h1>
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mx-auto mb-6">
          <Loader2 size={28} className="animate-spin text-purple"/>
        </div>
        <div className="space-y-3 max-w-xs mx-auto mb-6">
          {[['Создаём аватар', 100], ['Синхронизируем речь', Math.max(0,progress-30)], ['Экспорт', Math.max(0,progress-70)]].map(([l,p]) => (
            <div key={l as string}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-tx-2">{l}</span>
                <span className={Number(p)===100?'text-teal':'text-purple'}>{Number(p)===100?'✓ Готово':Number(p)===0?'Ждёт...':p+'%'}</span>
              </div>
              <div className="h-1.5 bg-purple-light rounded-full"><div className={`h-full rounded-full transition-all duration-500 ${Number(p)===100?'bg-teal':'bg-purple'}`} style={{width:`${p}%`}}/></div>
            </div>
          ))}
        </div>
        <p className="text-xs text-tx-3">Аватар будет готов примерно за 30 секунд</p>
      </Card>
    </div>
  )

  if (step === 'done') return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">Видео готово! 🎉</h1>
      <Card className="p-6">
        <div className="bg-purple-light rounded-xl h-48 flex items-center justify-center mb-5">
          <div className="text-center">
            <div className="text-4xl mb-2">🎬</div>
            <p className="text-sm text-purple font-medium">Видео создано</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href={videoUrl} download className="flex items-center justify-center gap-2 bg-purple text-white rounded-xl py-2.5 text-sm font-medium hover:bg-purple-mid transition-colors">
            <Download size={15}/>Скачать
          </a>
          <button onClick={() => navigator.clipboard.writeText(videoUrl).then(()=>toast.success('Ссылка скопирована'))}
            className="flex items-center justify-center gap-2 border border-border text-tx text-sm font-medium rounded-xl py-2.5 hover:bg-bg transition-colors">
            <Share2 size={15}/>Поделиться
          </button>
        </div>
        <button onClick={()=>setStep('form')} className="w-full mt-3 text-sm text-tx-2 hover:text-purple transition-colors">
          Создать ещё одно
        </button>
      </Card>
    </div>
  )

  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">Видео из фото</h1>
      <div className="space-y-4">
        {/* Photo upload */}
        <Card className="p-5">
          <label className="text-xs text-tx-2 font-medium uppercase tracking-wide block mb-3">Фото</label>
          <div onClick={()=>fileRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
              ${photoB64 ? 'border-teal bg-teal-light' : 'border-border hover:border-purple hover:bg-purple-light/30'}`}>
            {photoB64 ? (
              <div className="flex items-center justify-center gap-2 text-teal">
                <CheckCircle size={20}/>
                <span className="text-sm font-medium">{photoName}</span>
              </div>
            ) : (
              <div>
                <Upload size={24} className="text-tx-3 mx-auto mb-2"/>
                <p className="text-sm font-medium text-tx-2">Загрузить фото</p>
                <p className="text-xs text-tx-3 mt-1">JPG, PNG до 10 МБ · лицо чётко видно</p>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={pickFile} className="hidden"/>
        </Card>

        {/* Text */}
        <Card className="p-5">
          <Textarea label="Что скажет аватар?" value={text} onChange={e=>setText(e.target.value)}
            placeholder="Привет! Сегодня покажу рецепт пасты карбонара — это быстро и очень вкусно!..." rows={4}/>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-tx-3">{text.length} символов</span>
            <span className="text-xs text-tx-3">Рекомендуем 50–200 символов</span>
          </div>
        </Card>

        {/* Style */}
        <Card className="p-5">
          <label className="text-xs text-tx-2 font-medium uppercase tracking-wide block mb-3">Стиль</label>
          <div className="grid grid-cols-3 gap-2">
            {styles.map(s => (
              <button key={s} onClick={()=>setStyle(s)}
                className={`py-2 px-3 rounded-xl text-sm font-medium border transition-all
                  ${style===s ? 'bg-purple-light border-purple/30 text-purple' : 'border-border text-tx-2 hover:border-purple/20 hover:bg-purple-light/20'}`}>
                {styleLabels[s as keyof typeof styleLabels]}
              </button>
            ))}
          </div>
        </Card>

        {/* Platform */}
        <Card className="p-5">
          <label className="text-xs text-tx-2 font-medium uppercase tracking-wide block mb-3">Платформа</label>
          <div className="flex gap-2 flex-wrap">
            {platforms.map(p => (
              <button key={p} onClick={()=>setPlatform(p)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all capitalize
                  ${platform===p ? 'bg-purple text-white border-purple' : 'border-border text-tx-2 hover:border-purple/30'}`}>
                {p === 'instagram' ? 'Instagram' : p === 'tiktok' ? 'TikTok' : p === 'vk' ? 'ВКонтакте' : 'YouTube'}
              </button>
            ))}
          </div>
        </Card>

        <Btn onClick={generate} className="w-full justify-center py-3 text-base">
          Создать видео — 1 токен
        </Btn>
      </div>
    </div>
  )
}
