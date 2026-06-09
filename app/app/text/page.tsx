'use client'
import { useState } from 'react'
import { useAuth } from '@/lib/store'
import { api } from '@/lib/api'
import { Card, Btn, Input } from '@/components/ui'
import toast from 'react-hot-toast'
import { Copy, RefreshCw } from 'lucide-react'

const platforms = ['instagram','tiktok','vk','youtube']
const tones = ['FRIENDLY','EXPERT','FUNNY','MOTIVATIONAL']
const toneLabels = { FRIENDLY:'Дружелюбный', EXPERT:'Экспертный', FUNNY:'С юмором', MOTIVATIONAL:'Мотивация' }

export default function TextPage() {
  const { token } = useAuth()
  const [topic, setTopic]     = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [tone, setTone]       = useState('FRIENDLY')
  const [result, setResult]   = useState<{text:string;hashtags:string[]} | null>(null)
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    if (!topic.trim()) return toast.error('Введи тему поста')
    setLoading(true)
    try {
      const r = await api.generateText(token!, { topic, platform, tone })
      setResult(r)
    } catch { toast.error('Ошибка генерации') }
    finally { setLoading(false) }
  }

  const copy = () => {
    if (!result) return
    const t = result.text + '\n\n' + result.hashtags.map(h=>'#'+h).join(' ')
    navigator.clipboard.writeText(t).then(() => toast.success('Скопировано!'))
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">Текст для поста</h1>
      <div className="space-y-4">
        <Card className="p-5">
          <Input label="Тема поста" value={topic} onChange={e=>setTopic(e.target.value)}
            placeholder="Паста карбонара — рецепт за 15 минут" />
        </Card>
        <Card className="p-5 space-y-4">
          <div>
            <label className="text-xs text-tx-2 font-medium uppercase tracking-wide block mb-2">Платформа</label>
            <div className="flex gap-2 flex-wrap">
              {platforms.map(p => (
                <button key={p} onClick={()=>setPlatform(p)}
                  className={`px-3 py-1 rounded-full text-xs border transition-all capitalize ${platform===p?'bg-purple text-white border-purple':'border-border text-tx-2 hover:border-purple/30'}`}>
                  {p==='vk'?'ВКонтакте':p==='instagram'?'Instagram':p==='tiktok'?'TikTok':'YouTube'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs text-tx-2 font-medium uppercase tracking-wide block mb-2">Тон</label>
            <div className="flex gap-2 flex-wrap">
              {tones.map(t => (
                <button key={t} onClick={()=>setTone(t)}
                  className={`px-3 py-1 rounded-full text-xs border transition-all ${tone===t?'bg-purple text-white border-purple':'border-border text-tx-2 hover:border-purple/30'}`}>
                  {toneLabels[t as keyof typeof toneLabels]}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {result && (
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-tx-2 uppercase tracking-wide">Результат</span>
              <div className="flex gap-2">
                <button onClick={generate} className="flex items-center gap-1 text-xs text-tx-2 hover:text-purple transition-colors">
                  <RefreshCw size={12}/>Другой
                </button>
                <button onClick={copy} className="flex items-center gap-1 text-xs bg-purple text-white px-3 py-1 rounded-full hover:bg-purple-mid transition-colors">
                  <Copy size={11}/>Копировать
                </button>
              </div>
            </div>
            <p className="text-sm text-tx leading-relaxed mb-3">{result.text}</p>
            {result.hashtags.length > 0 && (
              <p className="text-sm text-purple">{result.hashtags.map(h=>'#'+h).join(' ')}</p>
            )}
          </Card>
        )}

        <Btn onClick={generate} loading={loading} className="w-full justify-center py-3">
          {result ? 'Сгенерировать заново' : 'Написать текст'}
        </Btn>
      </div>
    </div>
  )
}
