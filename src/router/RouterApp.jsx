import { Route, Routes } from 'react-router-dom'
import ColegioRoutes from '../colegio/routes/ColegioRoutes'
import AdminRoute from '../auth/routes/AdminRoute'
export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/*' element={<ColegioRoutes />} />
      <Route path='/admin/*' element={<AdminRoute />} />
    </Routes>
  )
}
// import { Suspense, lazy } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import LoadingPage from '../colegio/pages/LoadingPage/LoadingPage'
// const ColegioRoutes = lazy(() => import('../colegio/routes/ColegioRoutes'))
// const AdminRoute = lazy(() => import('../auth/routes/AdminRoute'))
// export const RouterApp = () => {
//   return (
//     <Suspense fallback={<LoadingPage />}>
//       <Routes>
//         <Route path='/*' element={<ColegioRoutes />} />
//         <Route path='/admin/*' element={<AdminRoute />} />
//       </Routes>
//     </Suspense>
//   )
// }
