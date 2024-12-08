import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider routes={ <RouterProvider router={routes} />}>

 </AuthProvider>
  </StrictMode>,
)
