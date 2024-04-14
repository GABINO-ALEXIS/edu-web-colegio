import { InicioPageDashboard } from '../pages/InicioPageDashboard/InicioPageDashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Pagina2 } from '../pages/Pagina2/Pagina2'
import { Sidebar } from '../components/Sidebar'
import './DashboardRoutes.css'
export const DashboardRoutes = () => {
  return (
    <div
      className='pagesContent'
    >
      <Sidebar />
      <Routes>
        <Route path='/inicio-dashboard' element={<InicioPageDashboard />} />
        <Route path='/pagina2' element={<Pagina2 />} />
        <Route path='/*' element={<Navigate to='/admin-page-ic/inicio-dashboard' replace />} />
      </Routes>
    </div>
  )
}
