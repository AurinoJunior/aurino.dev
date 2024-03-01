import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ToggleTheme } from '../Theme/ToggleTheme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

interface IMenuItemsData {
  name: string
  link: string
}

export function Header() {
  const { t } = useTranslation()
  const menuItems = t('menu.items', {
    returnObjects: true
  }) as IMenuItemsData[]

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

        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-md border hover:brightness-75">
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
