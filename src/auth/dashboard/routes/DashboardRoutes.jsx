import { SomosPageDashboard } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Pagina2 } from '../pages/Pagina2/Pagina2'
import { Sidebar } from '../components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { comenzarLeerPaginas } from '../../../store/colegio/thunks'
import NoticiasPageDashboard from '../pages/NoticiasPageDashboard/NoticiasPageDashboard'
import './DashboardRoutes.css'

export const DashboardRoutes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(comenzarLeerPaginas())
  }, [])

  return (
    <div
      className='pagesContent'
    >
      <Sidebar />
      <Routes>
        <Route path='/quienes-somos-dashboard' element={<SomosPageDashboard />} />
        <Route path='/noticias-dashboard' element={<NoticiasPageDashboard />} />
        <Route path='/pagina2' element={<Pagina2 />} />
        <Route path='/*' element={<Navigate to='/admin-page-ic/quienes-somos-dashboard' replace />} />
      </Routes>
    </div>
  )
}
