import { useTranslation } from 'react-i18next'
import { ContactItem } from './ContactCards'

interface IContactsData {
  name: string
  user: string
  link: string
}

export function Contact() {
  const { t } = useTranslation()
  const contacts = t('contact.contacts', {
    returnObjects: true
  }) as IContactsData[]

  return (
    <section id="contact" className="pt-24">
      <h2 className="text-2xl font-bold italic md:text-3xl">
        {t('contact.title')}
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-2">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.name}
            name={contact.name}
            link={contact.link}
            user={contact.user}
          />
        ))}
      </div>
    </section>
  )
}
