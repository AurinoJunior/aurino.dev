import { Menu } from 'lucide-react'
import { ToggleTheme } from '../Theme/ToggleTheme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full p-4 backdrop-blur-md">
      <a href="/" className="block w-full text-center text-2xl font-black">
        aurino<span className="text-sky-500">.dev</span>
      </a>

      <div className="absolute right-6 top-4 z-10 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950">
            <Menu size={24} />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ToggleTheme />
      </div>
    </header>
  )
}
