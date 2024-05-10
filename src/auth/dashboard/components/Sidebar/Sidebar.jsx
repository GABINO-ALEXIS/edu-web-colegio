import { HiDocumentArrowUp, HiHome } from 'react-icons/hi2'
import { HiOutlineLogout, HiMenuAlt2 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../../../../store/auth/thunks'
import user from '../../assets/user.svg'
import './Sidebar.css'

export const Sidebar = () => {
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)

  const onLogout = () => {
    dispatch(cerrarSesion())
  }
  return (
    <nav className='sidebar'>
      <div className='usuarioContent'>
        <div className='imgUser'>
          <img src={user} alt='icono de usuario' />
        </div>
        <span className='userName'>Usuario</span>
      </div>
      <div
        className={`menuSidebar ${menuOpen ? 'menuActivo' : null}`}
      >
        <NavLink
          to='/admin-page-ic/quienes-somos-dashboard'
          className='itemMenuSidebar'
        >
          <HiHome />
          Página | Quiénes Somos
        </NavLink>
        <NavLink
          to='/admin-page-ic/noticias-dashboard'
          className='itemMenuSidebar'
        >
          <HiDocumentArrowUp />
          Página | Noticias
        </NavLink>
        <NavLink
          to='/admin-page-ic/pagina2'
          className='itemMenuSidebar'
        >
          <HiDocumentArrowUp />
          menu 2
        </NavLink>
        <button
          className='btnSalir'
          onClick={onLogout}
        >
          Salir
          <HiOutlineLogout />
        </button>
      </div>
      <span onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen
          ? <IoClose className='menuSide' />
          : <HiMenuAlt2
              className='menuSide'
            />}
      </span>
    </nav>
  )
}
