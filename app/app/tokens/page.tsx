'use client'
import { useState } from 'react'
import { useAuth } from '@/lib/store'
import { Card, Btn } from '@/components/ui'
import toast from 'react-hot-toast'
import { CheckCircle } from 'lucide-react'

const packs = [
  { id:'tokens_1_80',   count:1,  price:'80 ₽',   perVideo:'80 ₽/видео' },
  { id:'tokens_5_400',  count:5,  price:'400 ₽',  perVideo:'80 ₽/видео' },
  { id:'tokens_10_800', count:10, price:'800 ₽',  perVideo:'80 ₽/видео', popular:true },
]

export default function TokensPage() {
  const { tokensCount } = useAuth()
  const [selected, setSelected] = useState('tokens_10_800')

  const buy = () => toast.success('Оплата через RuStore Pay — доступна в приложении')

  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-2">Токены</h1>
      <p className="text-sm text-tx-2 mb-6">1 токен = 1 видео-аватар. Токены не сгорают.</p>

      <div className="bg-purple-light rounded-2xl p-5 mb-6 flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold text-purple">{tokensCount}</div>
          <div className="text-sm text-tx-2">токенов на балансе</div>
        </div>
        <div className="text-3xl">🪙</div>
      </div>

      <div className="space-y-3 mb-6">
        {packs.map(p => (
          <div key={p.id} onClick={()=>setSelected(p.id)}
            className={`border rounded-2xl p-5 cursor-pointer transition-all relative ${selected===p.id?'border-purple bg-purple-light/40':'border-border bg-white hover:border-purple/30'}`}>
            {p.popular && (
              <span className="absolute top-3 right-3 bg-purple text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Выгодно</span>
            )}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-tx">{p.count} токен{p.count>1?'ов':''}</div>
                <div className="text-xs text-tx-3">{p.perVideo}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-tx">{p.price}</span>
                {selected===p.id && <CheckCircle size={18} className="text-purple"/>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Btn onClick={buy} className="w-full justify-center py-3 text-base">
        Купить — {packs.find(p=>p.id===selected)?.price}
      </Btn>
      <p className="text-center text-xs text-tx-3 mt-3">Оплата через RuStore Pay · Токены не сгорают</p>
    </div>
  )
}
