import { ContactItem } from './ContactCards'

import contactData from '@/data/contact.json'

export function Contact() {
  return (
    <section id="contact" className="mt-24">
      <h2 className="text-3xl font-bold italic">{contactData.title}</h2>

      <div className="mt-10 grid grid-cols-2 gap-2">
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
