import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProviders from './routes/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </StrictMode>,
)
