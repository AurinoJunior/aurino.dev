import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './styles/global.css'
import { ThemeProvider } from './components/Theme/ThemeProvider.tsx'
import { ToggleTheme } from './components/Theme/ToggleTheme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleTheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
