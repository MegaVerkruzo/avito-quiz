import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from '@/components/Router/Router.tsx'

import '@/styles/index.css'
import '@/styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
