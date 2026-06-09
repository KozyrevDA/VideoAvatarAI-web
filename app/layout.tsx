import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Нейросеть Видео — ИИ контент для соцсетей',
  description: 'Создавай говорящие аватары, тексты постов и переводи видео на 40+ языков. Для Instagram, TikTok, ВКонтакте.',
  keywords: 'видео аватар ии, нейросеть видео, контент для instagram, tiktok контент, перевод видео',
  openGraph: {
    title: 'Нейросеть Видео',
    description: 'ИИ создаёт видео-аватар твоим голосом',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Toaster position="bottom-right" toastOptions={{
          style: { borderRadius: '12px', fontSize: '13px', background: '#18163A', color: '#fff' },
          success: { iconTheme: { primary: '#1D9E75', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#C62828', secondary: '#fff' } },
        }}/>
      </body>
    </html>
  )
}
