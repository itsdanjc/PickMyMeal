import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeProvider } from "./components/ui/color-mode"
import { Provider } from "./components/ui/provider"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>,
)
