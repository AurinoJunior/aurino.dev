import { Brush } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface IOtherItemsData {
  id: string
  title: string
  link: string
}

const ICONS = {
  instagram: <Brush size={18} />
}

type IconsKeys = keyof typeof ICONS

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', {
    returnObjects: true
  }) as Array<string>

  const othersItems = t('about.others_items', {
    returnObjects: true
  }) as IOtherItemsData[]

  return (
    <section id="about" className="pt-24">
      <h2 className="text-2xl font-bold italic md:text-3xl">
        {t('about.title')}
      </h2>
      {paragraphs.map((text, i) => (
        <p className="mt-4 text-slate-500 dark:text-slate-400" key={i}>
          {text}
        </p>
      ))}

      <p className="mt-4 text-slate-500 dark:text-slate-400">
        {t('about.others')}
      </p>
      {othersItems.map((item) => (
        <a
          className="ml-2 mt-4 flex w-fit cursor-pointer items-center gap-2 underline decoration-1 transition hover:text-pink-500"
          target="_blank"
          key={item.id}
          href={item.link}
          rel="noreferrer"
        >
          {ICONS[item.id as IconsKeys]}
          {item.title}
        </a>
      ))}

      <div className="mt-8 italic text-slate-400 dark:text-slate-500">
        <p>{t('about.quote')}</p>
        <p className="ml-2 mt-2">{t('about.quote_author')}</p>
      </div>
    </section>
  )
}
