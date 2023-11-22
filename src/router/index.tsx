import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Settings from '../pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>
  },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router
