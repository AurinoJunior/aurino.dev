import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  function handleSwitchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <Button
      className="border-none"
      variant="outline"
      size="icon"
      onClick={handleSwitchTheme}
    >
      <Moon
        className="h-[1.2rem] w-[1.2rem] opacity-100 transition-all dark:opacity-0"
        fill="black"
      />
      <Sun
        className="absolute h-[1.2rem] w-[1.2rem] opacity-0 transition-all dark:opacity-100"
        fill="white"
      />
    </Button>
  )
}
