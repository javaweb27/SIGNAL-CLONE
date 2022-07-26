import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { lsDeleteAuthToken } from './lib/localStorageHandlers'

lsDeleteAuthToken()

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <StrictMode>
    <main id="main">
      <App />
    </main>
  </StrictMode>
)
