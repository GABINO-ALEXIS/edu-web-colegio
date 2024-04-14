import { loginEmailPassword, logoutFirebase } from '../../firebase/providers'
import { login, logout, verificandoCredenciales } from './'

export const verificarAutenticacion = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(verificandoCredenciales())
    const result = await loginEmailPassword({ email, password })
    if (!result.ok) return dispatch(logout(result))
    dispatch(login({ ...result, email }))
  }
}

export const cerrarSesion = () => {
  return async (dispatch) => {
    try {
      await logoutFirebase()
      dispatch(logout())
    } catch (error) {
      console.log(error)
    }
  }
}
