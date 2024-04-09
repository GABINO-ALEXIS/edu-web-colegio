import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'

const AdminRoute = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to='/admin/login' replace />} />
    </Routes>
  )
}

export default AdminRoute
