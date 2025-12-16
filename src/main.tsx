import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavigationBar from './components/NavigationBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationBar />
    <App />
  </StrictMode>,
)
