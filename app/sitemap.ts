import { MetadataRoute } from 'next'

const BASE = 'https://videoavataraii.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE,                  priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/login`,       priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/privacy`,     priority: 0.3, changeFrequency: 'yearly'  as const },
    { url: `${BASE}/terms`,       priority: 0.3, changeFrequency: 'yearly'  as const },
  ]

  const blogPosts = [
    'kak-sozdat-govoryashchego-avatara',
    'perevod-video-na-anglijskij',
    'tekst-dlya-posta-instagram-ii',
    'klonorovanie-golosa-onlayn',
    'videomarketing-dlya-malogo-biznesa',
  ]

  const posts = blogPosts.map(slug => ({
    url: `${BASE}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [
    ...staticPages.map(p => ({ ...p, lastModified: now })),
    ...posts,
  ]
}
