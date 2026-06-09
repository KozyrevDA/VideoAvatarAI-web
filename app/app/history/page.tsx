'use client'
import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/store'
import { api } from '@/lib/api'
import { Card, Spinner, Badge } from '@/components/ui'
import { Download } from 'lucide-react'

type Item = { id:string; type:string; title:string; status:string; videoUrl?:string; createdAt:string }

const typeIcon = (t:string) => t==='translation'?'🌍':t==='text_post'?'✏️':t==='ideas'?'💡':'👤'

export default function HistoryPage() {
  const { token } = useAuth()
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) return
    api.history(token).then(setItems).catch(()=>{}).finally(()=>setLoading(false))
  }, [token])

  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">История</h1>
      {loading ? <Spinner/> : items.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="text-3xl mb-3">🎬</div>
          <p className="text-tx-2">Ещё нет созданных видео</p>
        </Card>
      ) : (
        <Card className="divide-y divide-border">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-3 px-5 py-4">
              <div className="w-9 h-9 bg-purple-light rounded-xl flex items-center justify-center text-base flex-shrink-0">
                {typeIcon(item.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-tx truncate">{item.title}</div>
                <div className="text-xs text-tx-3">{item.createdAt}</div>
              </div>
              <Badge color={item.status==='ready'?'teal':item.status==='error'?'warn':'purple'}>
                {item.status==='ready'?'✓ Готово':item.status==='error'?'Ошибка':'В работе'}
              </Badge>
              {item.videoUrl && (
                <a href={item.videoUrl} download className="text-tx-3 hover:text-purple transition-colors ml-1">
                  <Download size={15}/>
                </a>
              )}
            </div>
          ))}
        </Card>
      )}
    </div>
  )
}
