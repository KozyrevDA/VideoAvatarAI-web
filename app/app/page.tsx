'use client'
import { useAuth } from '@/lib/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Video, Globe, PenLine, Lightbulb, ArrowRight, Clock } from 'lucide-react'
import { Card } from '@/components/ui'

const tools = [
  { href:'/app/avatar',    icon:Video,      title:'Видео из фото',    desc:'Аватар говорит твоим голосом', badge:'1 токен', color:'bg-purple-light text-purple', badgeColor:'bg-purple text-white' },
  { href:'/app/text',      icon:PenLine,    title:'Текст для поста',  desc:'Подписи с хэштегами', badge:'∞ бесплатно', color:'bg-purple-light text-purple', badgeColor:'bg-border text-tx-2' },
  { href:'/app/ideas',     icon:Lightbulb,  title:'30 идей',          desc:'По твоей нише', badge:'∞ бесплатно', color:'bg-teal-light text-teal', badgeColor:'bg-border text-tx-2' },
  { href:'/app/translate', icon:Globe,      title:'Перевод видео',    desc:'На 40+ языков твоим голосом', badge:'1 токен', color:'bg-teal-light text-teal', badgeColor:'bg-teal text-white' },
]

export default function Home() {
  const { token, tokensCount, isPro } = useAuth()
  const router = useRouter()
  useEffect(() => { if (!token) router.push('/login') }, [token, router])

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-sm text-tx-2 mb-1">Добрый день 👋</div>
          <h1 className="text-2xl font-bold text-tx">Что создаём?</h1>
        </div>
        {tokensCount <= 3 && (
          <Link href="/app/tokens" className="flex items-center gap-1.5 bg-warn-bg border border-warn/20 text-warn text-xs font-medium px-3 py-1.5 rounded-xl hover:opacity-80 transition-opacity">
            ⚡ {tokensCount} токенов
          </Link>
        )}
      </div>

      {/* Tools grid */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {tools.map(({ href, icon: Icon, title, desc, badge, color, badgeColor }) => (
          <Link key={href} href={href}>
            <Card className="p-5 hover:shadow-hover transition-all group cursor-pointer h-full">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon size={18}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-tx text-sm">{title}</span>
                    <span className={`${badgeColor} text-[10px] px-1.5 py-0.5 rounded-full font-medium`}>{badge}</span>
                  </div>
                  <p className="text-xs text-tx-2">{desc}</p>
                </div>
                <ArrowRight size={14} className="text-tx-3 group-hover:text-purple group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"/>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-tx flex items-center gap-2"><Clock size={15}/>Последние</h2>
        <Link href="/app/history" className="text-xs text-purple hover:underline">Все →</Link>
      </div>
      <Card className="divide-y divide-border">
        {[
          { icon:'👤', title:'Видео — паста рецепт', sub:'2 мин · Instagram', status:'ready' },
          { icon:'🌍', title:'Перевод → English', sub:'Вчера · 14:35', status:'ready' },
          { icon:'✏️', title:'Текст для поста', sub:'3 дня назад', status:'ready' },
        ].map(({ icon, title, sub, status }) => (
          <div key={title} className="flex items-center gap-3 px-5 py-3.5">
            <div className="w-8 h-8 bg-purple-light rounded-lg flex items-center justify-center text-sm flex-shrink-0">{icon}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-tx truncate">{title}</div>
              <div className="text-xs text-tx-3">{sub}</div>
            </div>
            {status === 'ready' && <span className="bg-teal-light text-teal text-[11px] font-medium px-2 py-0.5 rounded-full flex-shrink-0">✓ Готово</span>}
          </div>
        ))}
      </Card>
    </div>
  )
}
