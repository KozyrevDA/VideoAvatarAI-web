import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Post {
  title: string
  description: string
  keywords: string[]
  date: string
  readTime: string
  content: string
}

const posts: Record<string, Post> = {
  'kak-sozdat-govoryashchego-avatara': {
    title: 'Как создать говорящего аватара из фото — пошаговая инструкция',
    description: 'Подробная инструкция по созданию говорящего видео-аватара из любой фотографии с помощью ИИ. Занимает 30 секунд.',
    keywords: ['говорящий аватар из фото', 'создать аватар онлайн', 'видео аватар ии', 'аватар из фотографии говорит'],
    date: '2025-11-15',
    readTime: '5 мин',
    content: `
## Что такое говорящий аватар?

Говорящий аватар — это видео, в котором ваша фотография «оживает» и произносит заданный текст. ИИ синхронизирует движения губ с голосом, создавая реалистичное видео.

## Зачем это нужно?

- **Блогерам**: создавать профессиональный видеоконтент без съёмок
- **Малому бизнесу**: видеорекламу без видеографа
- **Экспертам**: объяснять темы в видеоформате быстро

## Пошаговая инструкция

### 1. Выбери правильное фото

Используй фото где:
- Лицо чётко видно и хорошо освещено
- Нейтральный фон (желательно)
- Разрешение не менее 512×512 пикселей

### 2. Напиши текст для аватара

Текст должен быть естественным — как будто ты говоришь его вслух. Рекомендуемая длина: 50–200 символов для Instagram Reels.

### 3. Нажми «Создать»

Нейросеть обработает фото и синхронизирует движения губ с голосом. Время создания — около 30 секунд.

### 4. Скачай и публикуй

Готовое видео в формате MP4, оптимизированном для выбранной платформы.
    `.trim(),
  },
  'perevod-video-na-anglijskij': {
    title: 'Как перевести видео на английский язык — свой голос, любой язык',
    description: 'Переводи видео на английский, испанский, китайский и 40+ языков, сохраняя свой голос. ИИ клонирует голос и переводит синхронизацию губ.',
    keywords: ['перевод видео на английский', 'перевести видео онлайн', 'дублирование видео ии', 'видео на другом языке'],
    date: '2025-11-20',
    readTime: '4 мин',
    content: `
## Как работает перевод видео?

Технология состоит из трёх шагов:
1. **GPT-5 переводит текст** на выбранный язык
2. **Fish Audio** синтезирует речь вашим клонированным голосом на новом языке
3. **Kling AI** создаёт новую синхронизацию губ

## Доступные языки

Английский, испанский, китайский (мандарин), немецкий, французский, японский, корейский, арабский, португальский, турецкий и ещё 30+ языков.

## Практическое применение

- Выйти на международную аудиторию без изучения языков
- Публиковать контент одновременно на рынках разных стран
- Монетизировать контент через зарубежные платформы
    `.trim(),
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://videoavataraii.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Нейросеть Видео'],
    },
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-[#E4E2F4] px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3 text-sm text-[#8A87AA]">
          <Link href="/" className="hover:text-[#18163A]">Главная</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#18163A]">Блог</Link>
          <span>/</span>
          <span className="text-[#18163A] truncate">{post.title.slice(0, 40)}...</span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-[#8A87AA] mb-4">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readTime} чтения</span>
          </div>
          <h1 className="text-3xl font-bold text-[#18163A] leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-[#8A87AA] leading-relaxed">{post.description}</p>
        </header>

        <div
          className="prose prose-lg max-w-none text-[#18163A]"
          style={{ lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ __html: post.content
            .replace(/^## (.+)$/gm, '<h2 style="font-size:20px;font-weight:500;margin:2rem 0 1rem;color:#18163A">$1</h2>')
            .replace(/^### (.+)$/gm, '<h3 style="font-size:17px;font-weight:500;margin:1.5rem 0 0.75rem;color:#18163A">$1</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/^- (.+)$/gm, '<li style="margin-bottom:6px">$1</li>')
            .replace(/(<li.*<\/li>\n?)+/g, '<ul style="margin:1rem 0;padding-left:1.5rem">$&</ul>')
            .replace(/\n\n/g, '</p><p style="margin-bottom:1rem">')
            .replace(/^([^<].+)$/gm, '<p style="margin-bottom:1rem">$1</p>')
          }}
        />

        <div className="mt-12 bg-[#EAE7FF] rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold text-[#18163A] mb-2">Попробуй прямо сейчас</h2>
          <p className="text-[#8A87AA] mb-4">Первые 7 дней за 1 ₽. Создай аватара за 30 секунд.</p>
          <Link href="/login"
            className="inline-flex items-center gap-2 bg-[#7F6FFF] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#5B4FCC] transition-colors">
            Создать бесплатно →
          </Link>
        </div>
      </article>
    </div>
  )
}
