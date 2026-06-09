'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { api } from '@/lib/api'
import { useAuth } from '@/lib/store'
import { Btn, Input } from '@/components/ui'
import toast from 'react-hot-toast'

export default function Login() {
  const router = useRouter()
  const { setAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    try {
      const res = await api.register({ email: email.trim(), provider: 'email' })
      setAuth(res.accessToken, res.userId, res.tokensCount)
      router.push('/app')
    } catch {
      toast.error('Ошибка входа — попробуй ещё раз')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-purple-light rounded-2xl flex items-center justify-center text-xl mx-auto mb-3">✨</div>
          <h1 className="text-xl font-bold text-tx">Нейросеть Видео</h1>
          <p className="text-sm text-tx-2 mt-1">Войди или создай аккаунт</p>
        </div>

        {/* Demo notice */}
        <div className="bg-teal-light border border-teal/20 rounded-xl px-4 py-3 mb-5 text-sm text-teal-dark">
          💡 Введи любой email — аккаунт создастся автоматически
        </div>

        <form onSubmit={handle} className="bg-white rounded-2xl border border-border p-6 shadow-card space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="masha@mail.ru"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
          <Btn type="submit" loading={loading} className="w-full justify-center">
            Войти / Зарегистрироваться
          </Btn>
        </form>

        <p className="text-center text-xs text-tx-3 mt-4">
          Регистрируясь, ты принимаешь{' '}
          <Link href="/privacy" className="text-purple hover:underline">условия использования</Link>
        </p>
        <div className="text-center mt-3">
          <Link href="/" className="text-sm text-tx-2 hover:text-purple transition-colors">← На главную</Link>
        </div>
      </div>
    </div>
  )
}
