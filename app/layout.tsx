import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const BASE_URL = 'https://videoavataraii.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Нейросеть Видео — ИИ создаёт видео-аватар твоим голосом',
    template: '%s | Нейросеть Видео',
  },
  description:
    'Загрузи фото → ИИ создаёт говорящий аватар твоим голосом за 30 секунд. Перевод видео на 40+ языков, тексты для постов Instagram, TikTok, ВКонтакте. Бесплатно 7 дней.',

  keywords: [
    'видео аватар ии', 'нейросеть видео', 'говорящий аватар из фото',
    'создать аватар онлайн', 'перевод видео на другой язык',
    'текст для поста инстаграм', 'контент для тик ток',
    'ии для блогеров', 'искусственный интеллект для соцсетей',
    'аватар из фото говорит', 'клонирование голоса', 'нейросеть для контента',
    'создать видео онлайн бесплатно', 'ии помощник блогера',
  ],

  authors: [{ name: 'APPWILL COMPANY LTD', url: BASE_URL }],
  creator: 'APPWILL COMPANY LTD',
  publisher: 'Нейросеть Видео',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: BASE_URL,
    siteName: 'Нейросеть Видео',
    title: 'Нейросеть Видео — ИИ создаёт видео-аватар твоим голосом',
    description:
      'Загрузи фото → говорящий аватар за 30 секунд. Перевод на 40+ языков. Тексты для Instagram, TikTok, VK.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Нейросеть Видео — ИИ контент для соцсетей',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Нейросеть Видео — видео-аватар за 30 секунд',
    description: 'Загрузи фото → ИИ создаёт говорящий аватар твоим голосом. 40+ языков.',
    images: ['/og-image.png'],
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      'ru-RU': BASE_URL,
      'en-US': `${BASE_URL}/en`,
    },
  },

  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
    yandex: 'YOUR_YANDEX_WEBMASTER_TOKEN',
  },

  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Yandex verification */}
        <meta name="yandex-verification" content="YOUR_YANDEX_TOKEN" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon set */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { borderRadius: '12px', fontSize: '13px', background: '#18163A', color: '#fff' },
            success: { iconTheme: { primary: '#1D9E75', secondary: '#fff' } },
            error:   { iconTheme: { primary: '#C62828', secondary: '#fff' } },
          }}
        />
      </body>
    </html>
  )
}
