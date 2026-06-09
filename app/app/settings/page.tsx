'use client'
import { useAuth } from '@/lib/store'
import { Card } from '@/components/ui'
import Link from 'next/link'
import { Zap, Bell, Shield, LogOut, ChevronRight } from 'lucide-react'

export default function SettingsPage() {
  const { tokensCount, isPro, logout } = useAuth()

  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-6">Профиль</h1>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-5 text-center">
            <div className="text-3xl font-bold text-purple">{tokensCount}</div>
            <div className="text-xs text-tx-2 mt-1">токенов осталось</div>
            <Link href="/app/tokens" className="text-xs text-purple hover:underline mt-2 block">Пополнить</Link>
          </Card>
          <Card className="p-5 text-center">
            {isPro
              ? <div className="text-sm font-semibold text-purple">✓ Pro</div>
              : <div className="text-3xl font-bold text-teal">—</div>
            }
            <div className="text-xs text-tx-2 mt-1">видео создано</div>
          </Card>
        </div>

        <Card className="divide-y divide-border">
          <Link href="/app/tokens" className="flex items-center gap-3 px-5 py-3.5 hover:bg-bg transition-colors group">
            <Zap size={16} className="text-tx-3"/>
            <span className="flex-1 text-sm text-tx">Купить токены</span>
            <span className="text-xs text-tx-3">80 ₽/видео</span>
            <ChevronRight size={14} className="text-tx-3"/>
          </Link>
          <div className="flex items-center gap-3 px-5 py-3.5">
            <Bell size={16} className="text-tx-3"/>
            <span className="flex-1 text-sm text-tx">Уведомления</span>
            <ChevronRight size={14} className="text-tx-3"/>
          </div>
          <Link href="/privacy" className="flex items-center gap-3 px-5 py-3.5 hover:bg-bg transition-colors">
            <Shield size={16} className="text-tx-3"/>
            <span className="flex-1 text-sm text-tx">Конфиденциальность</span>
            <ChevronRight size={14} className="text-tx-3"/>
          </Link>
        </Card>

        <button onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-3 text-sm text-error hover:bg-error-bg rounded-xl transition-colors border border-transparent hover:border-error/20">
          <LogOut size={14}/>Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}
