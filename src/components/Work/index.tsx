import { WorkCard } from './WorkCard'
import { useTranslation } from 'react-i18next'

interface IWorkData {
  name: string
  description: string
  tag: string
  work_time: string
  role: string
  link: string
}

export function Work() {
  const { t } = useTranslation()

  const companies = t('work.companies', {
    returnObjects: true
  }) as IWorkData[]

  return (
    <section id="work" className="pt-24">
      <h2 className="mb-4 text-2xl font-bold italic md:text-3xl">
        {t('work.title')}
      </h2>

      {companies.map((companie) => (
        <WorkCard
          key={companie.name}
          title={companie.name}
          description={companie.description}
          tag={companie.tag}
          role={companie.role}
          workTime={companie.work_time}
          link={companie.link}
        />
      ))}
    </section>
  )
}
