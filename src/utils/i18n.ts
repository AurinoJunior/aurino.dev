import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enAbout from '@/data/en/about.json'
import enContact from '@/data/en/contact.json'
import enHero from '@/data/en/hero.json'
import enMenu from '@/data/en/menu.json'
import enSkills from '@/data/en/skills.json'
import enWork from '@/data/en/work.json'

import ptAbout from '@/data/pt/about.json'
import ptContact from '@/data/pt/contact.json'
import ptHero from '@/data/pt/hero.json'
import ptMenu from '@/data/pt/menu.json'
import ptSkills from '@/data/pt/skills.json'
import ptWork from '@/data/pt/work.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          about: enAbout,
          contact: enContact,
          hero: enHero,
          menu: enMenu,
          skills: enSkills,
          work: enWork
        }
      },
      'pt-BR': {
        translation: {
          about: ptAbout,
          contact: ptContact,
          hero: ptHero,
          menu: ptMenu,
          skills: ptSkills,
          work: ptWork
        }
      }
    }
  })

export default i18n
