import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes'
import { LoginRoutes } from '../login/routes/LoginRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../../firebase/config'
import { login, logout } from '../../store/auth'
import LoadingPage from '../../colegio/pages/LoadingPage/LoadingPage'

const AdminRoute = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage: 'no-autenticado' }))

      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
    }
    )
  }, [])

  if (status === 'verificando') {
    return <LoadingPage />
  }

  return (
    <Routes>
      {(status === 'autenticado')
        ? <Route path='/*' element={<DashboardRoutes />} />
        : <Route path='/login/*' element={<LoginRoutes />} />}
      <Route path='/*' element={<Navigate to='/admin-page-ic/login' replace />} />
    </Routes>
  )
}

export default AdminRoute
