export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Нейросеть Видео',
        alternateName: 'VideoAvatarAI',
        url: 'https://videoavataraii.com',
        logo: 'https://videoavataraii.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'support@videoavataraii.com',
          contactType: 'customer support',
          availableLanguage: ['Russian', 'English'],
        },
        sameAs: [
          'https://vk.com/neuroset_video',
          'https://t.me/neuroset_video',
        ],
      })}}
    />
  )
}

export function SoftwareAppSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Нейросеть Видео',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Android, iOS, Web',
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '1',
          highPrice: '2490',
          priceCurrency: 'RUB',
          offerCount: '3',
          offers: [
            { '@type': 'Offer', name: 'Пробный', price: '1', priceCurrency: 'RUB', description: 'Первые 7 дней' },
            { '@type': 'Offer', name: 'Месячный', price: '499', priceCurrency: 'RUB', description: 'Подписка в месяц' },
            { '@type': 'Offer', name: 'Годовой', price: '2490', priceCurrency: 'RUB', description: 'Подписка в год' },
          ],
        },
        description: 'ИИ создаёт говорящий видео-аватар из фотографии. Клонирование голоса, перевод на 40+ языков, генерация текстов для постов.',
        featureList: [
          'Создание говорящего аватара из фото',
          'Клонирование голоса пользователя',
          'Перевод видео на 40+ языков',
          'Генерация текстов для Instagram, TikTok, VK',
          '30 идей контента по нише',
        ],
        screenshot: 'https://videoavataraii.com/screenshot.png',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
        },
      })}}
    />
  )
}

export function FAQSchema() {
  const faqs = [
    { q: 'Как создать говорящего аватара из фото?', a: 'Загрузи фото с чётким лицом, напиши текст который скажет аватар — ИИ создаст видео за 30 секунд.' },
    { q: 'Как клонировать свой голос?', a: 'Запиши 30–60 секунд своего голоса в разделе «Профиль». Все видео будут созданы именно твоим голосом.' },
    { q: 'На какие языки можно перевести видео?', a: 'Доступно 40+ языков: английский, испанский, китайский, немецкий, французский, японский, корейский, арабский и другие.' },
    { q: 'Сколько стоит создать одно видео?', a: '1 токен = 1 видео. Токен стоит 80 рублей при покупке. В подписке Pro — 5 видео в месяц включены.' },
    { q: 'Подходит ли сервис для малого бизнеса?', a: 'Да. Кафе, салоны, интернет-магазины, эксперты — создавайте профессиональный видеоконтент без студии за рублей.' },
    { q: 'Можно ли использовать видео в Instagram и TikTok?', a: 'Да. Видео создаётся в вертикальном формате 9:16, оптимальном для Instagram Reels, TikTok и YouTube Shorts.' },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      })}}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      })}}
    />
  )
}

export function HowToSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Как создать говорящего видео-аватара за 30 секунд',
        description: 'Пошаговая инструкция по созданию видео-аватара с помощью ИИ',
        totalTime: 'PT1M',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'RUB', value: '80' },
        step: [
          { '@type': 'HowToStep', name: 'Загрузи фото', text: 'Выбери фотографию с чётко видимым лицом. JPG или PNG до 10 МБ.' },
          { '@type': 'HowToStep', name: 'Напиши текст', text: 'Введи текст, который скажет аватар. Рекомендуем 50–200 символов.' },
          { '@type': 'HowToStep', name: 'Выбери платформу', text: 'Укажи Instagram, TikTok, ВКонтакте или YouTube — формат подстроится автоматически.' },
          { '@type': 'HowToStep', name: 'Скачай видео', text: 'Готовое видео появится через 30 секунд. Скачай или поделись в соцсетях.' },
        ],
      })}}
    />
  )
}
