import { Container } from './components/ui/Container'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </Container>
    </>
  )
}
