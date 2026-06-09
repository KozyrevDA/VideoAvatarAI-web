import Link from 'next/link'
import { ArrowRight, Mic, Globe, PenLine, Lightbulb, CheckCircle, Play } from 'lucide-react'

const features = [
  { icon: '🎬', title: 'Видео из фото', desc: 'Загрузи фото — аватар заговорит твоим голосом. Никакой студии и оборудования.', color: 'bg-purple-light' },
  { icon: '🌍', title: 'Перевод на 40+ языков', desc: 'Сними видео на русском — получи версии на английском, испанском, китайском. Твоим голосом.', color: 'bg-teal-light' },
  { icon: '✍️', title: 'Текст для поста', desc: 'ИИ напишет подписи для Instagram, TikTok, VK с нужным тоном и хэштегами.', color: 'bg-purple-light' },
  { icon: '💡', title: '30 идей контента', desc: 'Не знаешь о чём снимать? Получи 30 конкретных тем под твою нишу за секунды.', color: 'bg-teal-light' },
]

const plans = [
  { name: 'Месячный', price: '499 ₽', period: '/месяц', highlight: false, trial: false },
  { name: 'Годовой', price: '2 490 ₽', period: '/год', highlight: true, trial: true, badge: '-58%', trialText: 'Первые 7 дней — 1 ₽' },
]

const faqs = [
  { q: 'Нужны ли навыки монтажа?', a: 'Нет. Загрузил фото, написал текст — видео готово за 30 секунд.' },
  { q: 'Как клонируется голос?', a: 'Запиши 30–60 секунд своего голоса в разделе «Профиль». Аватар будет говорить именно им на любом языке.' },
  { q: 'Подходит ли для бизнеса?', a: 'Да. Кафе, салоны, интернет-магазины, эксперты — любой бизнес получает видеоконтент быстро и дёшево.' },
  { q: 'Что если токены закончатся?', a: 'Купи доп. токены за 80 ₽/видео в любой момент. Токены не сгорают.' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-[#18163A]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E4E2F4] bg-white/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#EAE7FF] flex items-center justify-center text-sm">✨</div>
            <span className="font-semibold text-sm text-[#18163A]">Нейросеть Видео</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-[#8A87AA] hover:text-[#18163A] transition-colors">Войти</Link>
            <Link href="/login" className="bg-[#7F6FFF] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#5B4FCC] transition-colors">
              Попробовать бесплатно
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#EAE7FF] text-[#7F6FFF] text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7F6FFF] animate-pulse"></span>
          Уже помогли 1 000+ блогерам и малому бизнесу
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#18163A] leading-tight mb-5 tracking-tight">
          Видеоконтент для<br/>
          <span className="text-[#7F6FFF]">соцсетей за 30 секунд</span>
        </h1>
        <p className="text-[#8A87AA] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Загрузи фото → ИИ создаёт говорящий аватар твоим голосом.<br/>
          Переводи на 40+ языков. Пиши тексты постов.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/login"
            className="inline-flex items-center gap-2 bg-[#7F6FFF] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#5B4FCC] transition-colors shadow-lg shadow-purple-200">
            Начать за 1 ₽
            <ArrowRight size={16}/>
          </Link>
          <button className="inline-flex items-center gap-2 border border-[#E4E2F4] text-[#18163A] font-medium px-7 py-3.5 rounded-xl hover:bg-[#F8F7FC] transition-colors">
            <Play size={15} className="text-[#7F6FFF]"/>
            Смотреть демо
          </button>
        </div>
        <p className="text-xs text-[#AEACC8] mt-4">Первые 7 дней — 1 ₽ · Отмена в любой момент</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12">
          {[['30 сек', 'время создания'], ['40+', 'языков'], ['80 ₽', 'за видео']].map(([v, l]) => (
            <div key={v} className="text-center">
              <div className="text-2xl font-bold text-[#18163A]">{v}</div>
              <div className="text-xs text-[#8A87AA] mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo preview */}
      <section className="bg-[#F8F7FC] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#E4E2F4] shadow-xl shadow-purple-50 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs text-[#8A87AA] font-medium uppercase tracking-wide mb-3">Как это работает</div>
                <h2 className="text-2xl font-bold text-[#18163A] mb-5">Фото + текст = готовое видео</h2>
                <div className="space-y-3">
                  {[
                    ['1', 'Загружаешь своё фото', 'portrait.jpg'],
                    ['2', 'Пишешь что скажет аватар', '"Привет, сегодня покажу рецепт..."'],
                    ['3', 'Выбираешь платформу', 'Instagram · TikTok · VK'],
                  ].map(([n, title, sub]) => (
                    <div key={n} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#EAE7FF] text-[#7F6FFF] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</div>
                      <div>
                        <div className="text-sm font-medium text-[#18163A]">{title}</div>
                        <div className="text-xs text-[#8A87AA]">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 bg-[#E1F5EE] rounded-xl px-4 py-3">
                  <CheckCircle size={16} className="text-[#1D9E75] flex-shrink-0"/>
                  <span className="text-sm text-[#085041]">Видео готово за ~30 секунд</span>
                </div>
              </div>
              {/* Mock UI */}
              <div className="bg-[#F8F7FC] rounded-2xl border border-[#E4E2F4] p-5">
                <div className="text-xs text-[#8A87AA] mb-3">Создаём видео...</div>
                <div className="space-y-2 mb-4">
                  {[['Создаём аватар', 100], ['Синхронизируем речь', 65], ['Экспорт', 0]].map(([label, pct]) => (
                    <div key={label as string}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#8A87AA]">{label}</span>
                        <span className={pct === 100 ? 'text-[#1D9E75] font-medium' : 'text-[#7F6FFF]'}>
                          {pct === 100 ? '✓ Готово' : pct === 0 ? 'Ждёт...' : `${pct}%`}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#EAE7FF] overflow-hidden">
                        <div className={`h-full rounded-full ${pct === 100 ? 'bg-[#1D9E75]' : 'bg-[#7F6FFF]'}`} style={{width:`${pct}%`}}/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#EAE7FF] rounded-xl px-4 py-3 text-xs text-[#5B4FCC]">
                  ✨ Отличное фото — аватар получится реалистичным
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#18163A] mb-3">Всё что нужно для контента</h2>
          <p className="text-[#8A87AA]">4 инструмента в одном приложении</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map(({ icon, title, desc, color }) => (
            <div key={title} className="bg-white border border-[#E4E2F4] rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-50 transition-all">
              <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center text-xl mb-4`}>{icon}</div>
              <h3 className="font-semibold text-[#18163A] mb-2">{title}</h3>
              <p className="text-sm text-[#8A87AA] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F8F7FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#18163A] mb-2">Простые цены</h2>
          <p className="text-[#8A87AA] mb-10">Подписка + дополнительные токены. Токены не сгорают.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {plans.map(p => (
              <div key={p.name} className={`bg-white rounded-2xl border p-7 text-left relative ${p.highlight ? 'border-[#7F6FFF] shadow-lg shadow-purple-100' : 'border-[#E4E2F4]'}`}>
                {p.badge && (
                  <span className="absolute top-4 right-4 bg-[#1D9E75] text-white text-xs font-bold px-2 py-0.5 rounded-full">{p.badge}</span>
                )}
                <div className="text-sm font-medium text-[#8A87AA] mb-1">{p.name}</div>
                {p.trialText && <div className="text-xs text-[#7F6FFF] mb-2 font-medium">{p.trialText}</div>}
                <div className="text-3xl font-bold text-[#18163A]">{p.price}<span className="text-base font-normal text-[#8A87AA]">{p.period}</span></div>
                <ul className="mt-5 space-y-2">
                  {['5 видео-аватаров/мес', 'Тексты постов — безлимит', 'Перевод 40+ языков', '30 идей контента'].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#18163A]">
                      <CheckCircle size={14} className="text-[#1D9E75] flex-shrink-0"/>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/login"
                  className={`mt-6 w-full inline-flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold transition-colors
                    ${p.highlight ? 'bg-[#7F6FFF] text-white hover:bg-[#5B4FCC]' : 'border border-[#E4E2F4] text-[#18163A] hover:bg-[#F8F7FC]'}`}>
                  {p.highlight ? 'Начать за 1 ₽' : 'Выбрать план'}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#8A87AA]">Доп. видео — <span className="font-medium text-[#18163A]">80 ₽/шт</span> · Токены не сгорают · RuStore Pay</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-[#18163A] mb-8 text-center">Частые вопросы</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="bg-white border border-[#E4E2F4] rounded-2xl px-6 py-4 group cursor-pointer">
              <summary className="font-medium text-[#18163A] text-sm list-none flex justify-between items-center">
                {q}
                <span className="text-[#8A87AA] group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="text-sm text-[#8A87AA] mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7F6FFF] py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">Начни создавать контент прямо сейчас</h2>
          <p className="text-purple-200 mb-8">Первые 7 дней за 1 ₽. Отмена в любой момент.</p>
          <Link href="/login"
            className="inline-flex items-center gap-2 bg-white text-[#7F6FFF] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
            Попробовать бесплатно
            <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E4E2F4] py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AEACC8]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#EAE7FF] rounded-lg flex items-center justify-center text-[10px]">✨</div>
            <span>© 2025 APPWILL COMPANY LTD</span>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#18163A] transition-colors">Конфиденциальность</Link>
            <Link href="/terms" className="hover:text-[#18163A] transition-colors">Условия</Link>
            <a href="mailto:support@videoavataraii.com" className="hover:text-[#18163A] transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
