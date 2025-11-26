import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Message from './Message.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Message />
  </StrictMode>,
)
