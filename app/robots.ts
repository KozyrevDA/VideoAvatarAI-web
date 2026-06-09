import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/app/', '/api/', '/login'],
      },
      {
        // Яндекс-бот
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/app/', '/api/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://videoavataraii.com/sitemap.xml',
    host: 'https://videoavataraii.com',
  }
}
