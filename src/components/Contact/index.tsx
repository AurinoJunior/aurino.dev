import { ContactItem } from './ContactCards'

import contactData from '@/data/contact.json'

export function Contact() {
  return (
    <section id="contact" className="pt-24">
      <h2 className="text-2xl font-bold italic md:text-3xl">
        {contactData.title}
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-1">
        {contactData.contacts.map((contact) => (
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
