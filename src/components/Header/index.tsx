import { Menu } from 'lucide-react'
import { ToggleTheme } from '../Theme/ToggleTheme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

import menuData from '@/data/menu.json'

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full p-4 backdrop-blur-md">
      <a
        href={menuData.logo_link}
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
            {menuData.items.map((m) => (
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
