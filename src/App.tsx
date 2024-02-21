import { Container } from './components/ui/Container'
import { Hero } from './components/Hero'
import { ThemeProvider } from './components/Theme/ThemeProvider'
import { ToggleTheme } from './components/Theme/ToggleTheme'

export function App() {
  return (
    <ThemeProvider>
      <ToggleTheme />
      <Container>
        <Hero />
      </Container>
    </ThemeProvider>
  )
}
