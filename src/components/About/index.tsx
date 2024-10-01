import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', {
    returnObjects: true
  }) as Array<string>

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

      <div className="mt-8 italic text-slate-400 dark:text-slate-500">
        <p>{t('about.quote')}</p>
        <p className="ml-2 mt-2">{t('about.quote_author')}</p>
      </div>
    </section>
  )
}
