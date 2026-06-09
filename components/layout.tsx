'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/store'
import { Home, Clock, Lightbulb, Settings, Zap, LogOut, Globe } from 'lucide-react'
import { ReactNode } from 'react'

const nav = [
  { href:'/app',          icon:Home,       label:'Главная' },
  { href:'/app/history',  icon:Clock,      label:'История' },
  { href:'/app/ideas',    icon:Lightbulb,  label:'Идеи'    },
  { href:'/app/translate',icon:Globe,      label:'Перевод' },
  { href:'/app/settings', icon:Settings,   label:'Профиль' },
]

export function AppLayout({ children }: { children: ReactNode }) {
  const path = usePathname()
  const { tokensCount, isPro, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-col border-r border-border bg-white fixed h-full z-20">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-border">
          <div className="w-8 h-8 rounded-xl bg-purple-light flex items-center justify-center text-sm">✨</div>
          <div>
            <div className="text-sm font-semibold text-tx">Нейросеть Видео</div>
            <div className="text-[10px] text-tx-3">ИИ контент</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {nav.map(({ href, icon: Icon, label }) => {
            const active = path === href || (href !== '/app' && path.startsWith(href))
            return (
              <Link key={href} href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all
                  ${active ? 'bg-purple-light text-purple font-medium' : 'text-tx-2 hover:bg-bg hover:text-tx'}`}>
                <Icon size={16}/>
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Token badge */}
        <div className="px-4 py-3 mx-3 mb-2 rounded-xl bg-warn-bg border border-warn/20">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-warn font-medium flex items-center gap-1"><Zap size={11}/>Токены</span>
            {isPro && <span className="text-[10px] bg-purple text-white px-1.5 py-0.5 rounded-full">Pro</span>}
          </div>
          <div className="text-2xl font-semibold text-tx">{tokensCount}</div>
          <Link href="/app/tokens" className="text-[11px] text-purple hover:underline mt-1 block">Купить токены →</Link>
        </div>

        {/* Logout */}
        <button onClick={logout}
          className="flex items-center gap-2 mx-3 mb-4 px-3 py-2 rounded-xl text-sm text-tx-3 hover:text-error hover:bg-error-bg transition-all">
          <LogOut size={14}/>Выйти
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 md:ml-60 flex flex-col min-h-screen">
        <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border flex z-20">
        {nav.map(({ href, icon: Icon, label }) => {
          const active = path === href || (href !== '/app' && path.startsWith(href))
          return (
            <Link key={href} href={href} className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-[10px] transition-colors
              ${active ? 'text-purple' : 'text-tx-3'}`}>
              <Icon size={18}/>
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
