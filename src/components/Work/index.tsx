import { WorkCard } from './WorkCard'
import workData from '@/data/work.json'

export function Work() {
  return (
    <section id="work" className="pt-24">
      <h2 className="mb-4 text-2xl font-bold italic md:text-3xl">
        {workData.title}
      </h2>

      {workData.companies.map((companie) => (
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
