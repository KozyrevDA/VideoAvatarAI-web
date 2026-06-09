'use client'
import { useState } from 'react'
import { useAuth } from '@/lib/store'
import { api } from '@/lib/api'
import { Card, Btn, Input } from '@/components/ui'
import toast from 'react-hot-toast'
import { Copy, Clipboard } from 'lucide-react'

const platforms = ['instagram','tiktok','vk','youtube']

export default function IdeasPage() {
  const { token } = useAuth()
  const [niche, setNiche] = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [ideas, setIdeas]   = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    if (!niche.trim()) return toast.error('Введи свою нишу')
    setLoading(true)
    try {
      const r = await api.generateIdeas(token!, { niche, platform, count: 30 })
      setIdeas(r.ideas)
    } catch { toast.error('Ошибка генерации') }
    finally { setLoading(false) }
  }

  const copyOne = (idea: string) => {
    navigator.clipboard.writeText(idea).then(() => toast.success('Скопировано!'))
  }

  const copyAll = () => {
    const text = ideas.map((idea, i) => `${i+1}. ${idea}`).join('\n')
    navigator.clipboard.writeText(text).then(() => toast.success(`Все ${ideas.length} идей скопированы!`))
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">30 идей контента</h1>
      <div className="space-y-4">
        <Card className="p-5 space-y-4">
          <Input label="Твоя ниша" value={niche} onChange={e=>setNiche(e.target.value)}
            placeholder="Кулинария, фитнес, красота, бизнес..." />
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
          <Btn onClick={generate} loading={loading} className="w-full justify-center">
            {ideas.length > 0 ? 'Обновить идеи' : 'Придумать идеи'}
          </Btn>
        </Card>

        {ideas.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-tx">{ideas.length} идей по нише «{niche}»</span>
              <button onClick={copyAll} className="flex items-center gap-1.5 text-xs bg-purple text-white px-3 py-1.5 rounded-full hover:bg-purple-mid transition-colors">
                <Clipboard size={11}/>Скопировать все
              </button>
            </div>
            <Card className="divide-y divide-border">
              {ideas.map((idea, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-3.5 group">
                  <span className="text-xs text-purple font-semibold w-6 flex-shrink-0 mt-0.5">{i+1}</span>
                  <p className="text-sm text-tx flex-1 leading-relaxed">{idea}</p>
                  <button onClick={()=>copyOne(idea)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-tx-3 hover:text-purple">
                    <Copy size={13}/>
                  </button>
                </div>
              ))}
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
