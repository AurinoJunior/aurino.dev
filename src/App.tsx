import { ThemeProvider } from './components/Theme/ThemeProvider'
import { ToggleTheme } from './components/Theme/ToggleTheme'

export function App() {
  return (
    <ThemeProvider>
      <h1>Nice</h1>
      <ToggleTheme />
    </ThemeProvider>
  )
}
