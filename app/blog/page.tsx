import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Блог — советы по видеоконтенту и ИИ',
  description: 'Статьи о создании видеоконтента с помощью ИИ, говорящих аватарах, переводе видео и продвижении в соцсетях.',
  alternates: { canonical: 'https://videoavataraii.com/blog' },
}

const articles = [
  { slug: 'kak-sozdat-govoryashchego-avatara', title: 'Как создать говорящего аватара из фото — пошаговая инструкция', date: '15 ноября 2025', readTime: '5 мин', tag: 'Аватар' },
  { slug: 'perevod-video-na-anglijskij', title: 'Как перевести видео на английский язык — свой голос, любой язык', date: '20 ноября 2025', readTime: '4 мин', tag: 'Перевод' },
  { slug: 'tekst-dlya-posta-instagram-ii', title: 'Как ИИ пишет тексты для Instagram — тест 5 инструментов', date: '1 декабря 2025', readTime: '7 мин', tag: 'Тексты' },
  { slug: 'klonorovanie-golosa-onlayn', title: 'Клонирование голоса: как работает и где использовать', date: '10 декабря 2025', readTime: '6 мин', tag: 'Технологии' },
  { slug: 'videomarketing-dlya-malogo-biznesa', title: 'Видеомаркетинг для малого бизнеса: с ИИ за 30 секунд', date: '20 декабря 2025', readTime: '8 мин', tag: 'Бизнес' },
]

const tagColors: Record<string, string> = {
  'Аватар':     'bg-[#EAE7FF] text-[#7F6FFF]',
  'Перевод':    'bg-[#E1F5EE] text-[#1D9E75]',
  'Тексты':     'bg-[#EAE7FF] text-[#7F6FFF]',
  'Технологии': 'bg-[#EAE7FF] text-[#7F6FFF]',
  'Бизнес':     'bg-[#E1F5EE] text-[#1D9E75]',
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <div className="text-sm text-[#8A87AA] mb-2">
            <Link href="/" className="hover:text-[#18163A]">Главная</Link> / Блог
          </div>
          <h1 className="text-3xl font-bold text-[#18163A] mb-3">Блог</h1>
          <p className="text-[#8A87AA]">Советы по видеоконтенту, работе с ИИ и продвижению в соцсетях</p>
        </div>

        <div className="space-y-5">
          {articles.map(({ slug, title, date, readTime, tag }) => (
            <article key={slug}>
              <Link href={`/blog/${slug}`}
                className="block border border-[#E4E2F4] rounded-2xl p-5 hover:border-[#7F6FFF] hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 text-xs text-[#8A87AA] mb-3">
                  <span className={`${tagColors[tag]} px-2 py-0.5 rounded-full font-medium`}>{tag}</span>
                  <time>{date}</time>
                  <span>·</span>
                  <span>{readTime} чтения</span>
                </div>
                <h2 className="text-base font-semibold text-[#18163A] leading-snug hover:text-[#7F6FFF] transition-colors">
                  {title}
                </h2>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-[#EAE7FF] rounded-2xl p-6 text-center">
          <p className="text-[#5B4FCC] font-medium mb-2">Попробуй Нейросеть Видео</p>
          <Link href="/login"
            className="inline-flex items-center gap-2 bg-[#7F6FFF] text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-[#5B4FCC] transition-colors text-sm">
            Начать бесплатно →
          </Link>
        </div>
      </div>
    </div>
  )
}
