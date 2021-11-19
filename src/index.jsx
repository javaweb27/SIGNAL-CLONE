import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
  <StrictMode>
    <main>
      <App />
    </main>
  </StrictMode>,
  document.getElementById('root')
)
