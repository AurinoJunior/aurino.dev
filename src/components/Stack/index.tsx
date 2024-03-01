import { useTranslation } from 'react-i18next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'

interface ISkillsetData {
  title: string
  value: number
  skills: string[]
}

export function Stack() {
  const { t } = useTranslation()
  const skillset = t('skills.skillset', {
    returnObjects: true
  }) as ISkillsetData[]

  return (
    <section id="section" className="pt-24">
      <h2 className="text-2xl font-bold italic md:text-3xl">
        {t('skills.title')}
      </h2>

      <div className="mt-4">
        {skillset.map((item) => (
          <Accordion key={item.value} type="single" collapsible>
            <AccordionItem value={String(item.value)}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="text-sky-600">
                {item.skills.map((s) => (
                  <div key={s} className="ml-2 flex items-center">
                    <span className="mr-2 text-xl">•</span>
                    <span className="tracking-widest">{s}</span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
