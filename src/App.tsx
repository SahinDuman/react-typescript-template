import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routing/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export { App }
