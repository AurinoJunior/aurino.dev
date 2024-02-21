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
    <Button variant="outline" size="icon" onClick={handleSwitchTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all opacity-100 dark:opacity-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all opacity-0 dark:opacity-100" />
    </Button>
  )
}
