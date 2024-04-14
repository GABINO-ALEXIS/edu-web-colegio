import { MdEmail, MdVpnKey } from 'react-icons/md'
import { IoEyeSharp, IoWarningOutline } from 'react-icons/io5'
import { HiMiniEyeSlash } from 'react-icons/hi2'
import { insignia } from '../../../colegio/assets/iconos'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verificarAutenticacion } from '../../../store/auth/thunks'
import './LoginPage.css'

let bolean = false
const initialForm = {
  email: '',
  password: ''
}
const LoginPage = () => {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const [viewPassord, setViewPassord] = useState(false)
  const [formLogin, setFormLogin] = useState(initialForm)
  const { email, password } = formLogin

  const onChange = ({ target }) => {
    setFormLogin({
      ...formLogin,
      [target.name]: target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(verificarAutenticacion({ email, password }))
  }

  const cambiarBolean = () => {
    bolean = true
  }
  const campoIncorrecto = errorMessage && bolean
  const verificando = useMemo(() => status === 'verificando', [status])

  return (
    <div className='loginContent'>
      <form
        className='formLogin'
        onSubmit={onSubmit}
      >
        <span className='insigniaLogin'>
          <img src={insignia} alt='Insignia del Colegio' />
        </span>
        <p className='textoL'>
          Colegio Inmaculada Concepción de María
        </p>
        <h1 className='iniciarS'>
          Iniciar Sesión
        </h1>
        <span className='camposSpan'>
          <MdEmail className='iconosCampos' />
          <input
            type='email'
            placeholder='Usuario'
            className={`camposLogin ${campoIncorrecto ? 'campoIncorrecto' : null}`}
            name='email'
            value={email}
            onChange={onChange}
          />
        </span>
        <span className='camposSpan'>
          <MdVpnKey className='iconosCampos' />
          <input
            type={viewPassord ? 'text' : 'password'}
            placeholder='Contraseña'
            className={`camposLogin ${campoIncorrecto ? 'campoIncorrecto' : null}`}
            name='password'
            value={password}
            onChange={onChange}
          />
          <span onClick={() => setViewPassord(!viewPassord)}>
            {viewPassord
              ? <IoEyeSharp className='eyesIcon' />
              : <HiMiniEyeSlash className='eyesIcon' />}

          </span>
        </span>
        {campoIncorrecto
          ? <div className='mError'> <IoWarningOutline /> Ups, correo o contraseña incorrectos </div>
          : null}
        <button
          className='btnLogin'
          disabled={verificando}
          onClick={cambiarBolean}
        >
          INGRESAR
        </button>
      </form>
    </div>
  )
}

export default LoginPage
