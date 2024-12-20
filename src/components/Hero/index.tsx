import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()
  const phrases = t('hero.phrase_animation', {
    returnObjects: true
  }) as Array<string>

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]

  return (
    <section id="hero" className="pt-32">
      <h1 className="text-4xl font-black italic text-sky-500 dark:text-white md:text-5xl">
        {t('hero.title')}
      </h1>
      <h2
        className="
            mt-8
            animate-typing overflow-hidden whitespace-nowrap
            bg-gradient-to-r from-sky-500 from-10% via-violet-500 via-30% to-transparent to-90%
            bg-clip-text
            text-xl
            font-bold text-transparent
            dark:via-white
            md:text-2xl
          "
      >
        {randomPhrase}
      </h2>

      <p className="text-md mt-8 text-slate-500 dark:text-slate-400 md:text-lg">
        {t('hero.description')}
      </p>

      <div className="mt-8 flex flex-col justify-between text-slate-400 dark:text-slate-500 md:flex-row">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <p>{t('hero.locale')}</p>
        </div>

        <div className="mt-4 flex items-center gap-2 md:mt-0">
          <span className="relative flex h-3 w-3">
            <span className="absolute h-full w-full animate-ping rounded-full bg-lime-500"></span>
            <span className="h-3 w-3 rounded-full bg-lime-500"></span>
          </span>
          <p>{t('hero.status')}</p>
        </div>
      </div>
    </section>
  )
}
