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
        className="block w-full text-center text-2xl font-black"
      >
        aurino<span className="text-sky-500">.dev</span>
      </a>

      <div className="absolute right-6 top-4 z-10 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950">
            <Menu size={24} />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {menuData.items.map((m) => (
              <DropdownMenuItem className="cursor-pointer" key={m.name}>
                <a href={m.link}>{m.name}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ToggleTheme />
      </div>
    </header>
  )
}
