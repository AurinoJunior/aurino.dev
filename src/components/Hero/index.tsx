import { MapPin } from 'lucide-react'

import heroData from '@/data/hero.json'

export function Hero() {
  const randomPhrase =
    heroData.phrase_animation[
      Math.floor(Math.random() * heroData.phrase_animation.length)
    ]

  return (
    <section id="hero">
      <h1 className="text-5xl font-black italic text-sky-500 dark:text-white">
        {heroData.title}
      </h1>
      <h2
        className="
            mt-8
            animate-typing overflow-hidden whitespace-nowrap
            bg-gradient-to-r from-sky-500 from-10% via-violet-500 via-30% to-transparent to-90%
            bg-clip-text
            text-2xl
            font-bold text-transparent
            dark:via-white
          "
      >
        {randomPhrase}
      </h2>

      <p className="mt-8 text-lg text-slate-400">{heroData.description}</p>

      <div className="flex justify-between">
        <div className="mt-8 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          <p>{heroData.locale}</p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-slate-500">
          <span className="relative flex h-3 w-3">
            <span className="absolute h-full w-full animate-ping rounded-full bg-lime-500"></span>
            <span className="h-3 w-3 rounded-full bg-lime-500"></span>
          </span>
          <p>{heroData.status}</p>
        </div>
      </div>
    </section>
  )
}