import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { Footer, Header } from '../layouts'
import LoadingPage from '../pages/LoadingPage/LoadingPage'
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../../store/auth/thunks'
import { comenzarLeerPaginas } from '../../store/colegio/thunks'

const PrimariaPage = lazy(() => import('../pages/PrimariaPage/PrimariaPage'))
const HistoriaPage = lazy(() => import('../pages/HistoriaPage/HistoriaPage'))
const ContactenosPage = lazy(() => import('../pages/ContactenosPage/ContactenosPage'))
const GaleriaPage = lazy(() => import('../pages/GaleriaPage/GaleriaPage'))
const InicialPage = lazy(() => import('../pages/InicialPage/InicialPage'))
const AdmisionPage = lazy(() => import('../pages/AdmisionPage/AdmisionPage'))
const InicioPage = lazy(() => import('../pages/InicioPage/InicioPage'))
const MetodologiaPage = lazy(() => import('../pages/MetodologiaPage/MetodologiaPage'))
const SomosPage = lazy(() => import('../pages/SomosPage/SomosPage'))
const NoticiasPage = lazy(() => import('../pages/NoticiasPage/NoticiasPage'))

const ColegioRoutes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cerrarSesion())
    dispatch(comenzarLeerPaginas())
  }, [])

  return (
    <>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path='/inicio' element={<InicioPage />} />
          <Route path='/historia' element={<HistoriaPage />} />
          <Route path='/quienes-somos' element={<SomosPage />} />
          <Route path='/admision' element={<AdmisionPage />} />
          <Route path='/inicial' element={<InicialPage />} />
          <Route path='/primaria' element={<PrimariaPage />} />
          <Route path='/metodologia' element={<MetodologiaPage />} />
          <Route path='/contactenos' element={<ContactenosPage />} />
          <Route path='/galeria' element={<GaleriaPage />} />
          <Route path='/noticias' element={<NoticiasPage />} />
          <Route path='/*' element={<Navigate to='/inicio' replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default ColegioRoutes
