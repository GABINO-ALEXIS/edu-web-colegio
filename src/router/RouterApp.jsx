import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from '../colegio/pages/LoadingPage/LoadingPage'
import ColegioRoutes from '../colegio/routes/ColegioRoutes'

const AdminRoute = lazy(() => import('../auth/router/AdminRoute'))

export const RouterApp = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path='/*' element={<ColegioRoutes />} />
        <Route path='/admin-page-ic/*' element={<AdminRoute />} />
      </Routes>
    </Suspense>
  )
}
