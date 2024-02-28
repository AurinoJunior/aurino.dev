import stackData from "@/data/skills.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export function Stack() {
  return (
    <section id="section" className="pt-24">
      <h2 className="text-2xl font-bold italic md:text-3xl">
        {stackData.title}
      </h2>

      <div className="mt-4">
        {stackData.skillset.map((item) => (
          <Accordion type="single" collapsible>
            <AccordionItem value={String(item.value)}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="text-sky-600">
                {item.skills.map((s) => (
                  <div className="flex ml-2 items-center">
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
