import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности сервиса Нейросеть Видео. Как мы собираем, используем и защищаем ваши данные.',
  robots: { index: true, follow: false },
  alternates: { canonical: 'https://videoavataraii.com/privacy' },
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-sm text-[#8A87AA] mb-6">
          <Link href="/" className="hover:text-[#18163A]">Главная</Link> / Политика конфиденциальности
        </div>
        <h1 className="text-3xl font-bold text-[#18163A] mb-3">Политика конфиденциальности</h1>
        <p className="text-[#8A87AA] mb-8">Последнее обновление: 1 июня 2026</p>
        <div className="prose max-w-none text-[#18163A] space-y-6 text-sm leading-relaxed">
          <p>APPWILL COMPANY LTD уважает конфиденциальность пользователей и обязуется защищать персональные данные.</p>
          <h2 className="text-lg font-medium mt-8">Какие данные мы собираем</h2>
          <ul className="list-disc pl-5 space-y-1 text-[#8A87AA]">
            <li>Email адрес (при регистрации)</li>
            <li>Загружаемые фотографии (только для создания аватара, удаляются после генерации)</li>
            <li>Голосовые записи (для клонирования голоса, удаляются по запросу)</li>
            <li>История генераций (30 дней)</li>
          </ul>
          <h2 className="text-lg font-medium mt-8">Мы не продаём данные третьим лицам</h2>
          <p className="text-[#8A87AA]">Ваши данные используются исключительно для работы сервиса и не передаются рекламодателям.</p>
          <h2 className="text-lg font-medium mt-8">Контакт</h2>
          <p className="text-[#8A87AA]">По вопросам конфиденциальности: <a href="mailto:privacy@videoavataraii.com" className="text-[#7F6FFF]">privacy@videoavataraii.com</a></p>
        </div>
      </div>
    </div>
  )
}
