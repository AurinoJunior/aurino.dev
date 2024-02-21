import { Container } from './components/Container'
import { Hero } from './components/Hero'
import { ThemeProvider } from './components/Theme/ThemeProvider'
// import { ToggleTheme } from './components/Theme/ToggleTheme'

export function App() {
  return (
    <ThemeProvider>
      <Container>
        <Hero />
        {/* <ToggleTheme /> */}
      </Container>
    </ThemeProvider>
  )
}
