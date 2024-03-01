import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ToggleTheme } from '../Theme/ToggleTheme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'

interface IMenuItemsData {
  name: string
  link: string
}

export function Header() {
  const { t, i18n } = useTranslation()
  const menuItems = t('menu.items', {
    returnObjects: true
  }) as IMenuItemsData[]

  function handleChangeLanguage() {
    const updateLang = i18n.language === 'en' ? 'pt-BR' : 'en'
    return i18n.changeLanguage(updateLang)
  }

  function getIconLang() {
    return i18n.language === 'en' ? '/brasil.png' : '/usa.png'
  }

  return (
    <header className="fixed top-0 z-10 w-full p-4 backdrop-blur-md">
      <a
        href={t('menu.logo_link')}
        className="block w-full text-2xl font-black lg:text-center"
      >
        aurino<span className="text-sky-500">.dev</span>
      </a>

      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 lg:right-6">
        <ToggleTheme />

        <Button size="icon" variant="ghost" onClick={handleChangeLanguage}>
          <img src={getIconLang()} alt={i18n.language} width={25} height={25} />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-md  hover:brightness-75">
            <Menu size={24} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mr-4 lg:mr-6">
            {menuItems.map((m) => (
              <a href={m.link} key={m.name}>
                <DropdownMenuItem className="cursor-pointer">
                  {m.name}
                </DropdownMenuItem>
              </a>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
