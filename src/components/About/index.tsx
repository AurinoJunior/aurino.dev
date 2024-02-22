import { Brush } from 'lucide-react'

import aboutData from '@/data/about.json'

const ICONS = {
  instagram: <Brush size={18} />
}

type IconsKeys = keyof typeof ICONS

export function About() {
  return (
    <section id="about" className="pt-24">
      <h2 className="text-2xl font-bold italic md:text-3xl">
        {aboutData.title}
      </h2>
      {aboutData.paragraphs.map((text, i) => (
        <p className="mt-4 text-slate-400" key={i}>
          {text}
        </p>
      ))}

      <p className="mt-4 text-slate-400">{aboutData.others}</p>
      {aboutData.others_items.map((item) => (
        <a
          className="ml-2 mt-4 flex w-fit cursor-pointer items-center gap-2 underline decoration-1 hover:text-pink-500"
          target="_blank"
          key={item.id}
          href={item.link}
          rel="noreferrer"
        >
          {ICONS[item.id as IconsKeys]}
          {item.title}
        </a>
      ))}

      <div className="mt-8 italic text-slate-500">
        <p>{aboutData.quote}</p>
        <p className="ml-2 mt-2">{aboutData.quote_author}</p>
      </div>
    </section>
  )
}
