'use client'
import { Card } from '@/components/ui'
import Link from 'next/link'

const langs = ['English','Español','中文','Deutsch','Français','日本語','Português','العربية','한국어','Türkçe']

export default function TranslatePage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-tx mb-2">Перевод видео</h1>
      <p className="text-tx-2 text-sm mb-6">Твой голос на любом языке</p>
      <Card className="p-6 text-center">
        <div className="text-4xl mb-4">🌍</div>
        <h2 className="font-semibold text-tx mb-2">Доступно в мобильном приложении</h2>
        <p className="text-sm text-tx-2 mb-5 max-w-xs mx-auto">
          Для создания переведённого аватара используй мобильное приложение — там доступен полный пайплайн с Fish Audio и Hedra.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          {langs.map(l => (
            <span key={l} className="bg-purple-light text-purple text-xs px-2.5 py-1 rounded-full">{l}</span>
          ))}
        </div>
        <a href="https://rustore.ru" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-purple-mid transition-colors">
          Скачать приложение
        </a>
      </Card>
    </div>
  )
}
