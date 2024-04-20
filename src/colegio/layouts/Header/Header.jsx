import {
  RiMenu3Fill,
  RiCloseFill,
  RiHome3Line,
  RiSchoolLine,
  RiContactsBook2Line,
  RiDoorOpenLine
} from 'react-icons/ri'
import { MdOutlineAdminPanelSettings, MdOutlineSchool } from 'react-icons/md'
import { BsBarChartSteps } from 'react-icons/bs'
import { FaRegNewspaper } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { insignia } from '../../assets/iconos'
import { MenuItem } from '../../components'
import './Header.css'

export const Header = () => {
  const ancorsan = useRef()
  const { pathname } = useLocation()

  const cerrarMenu = () => {
    ancorsan.current.click()
  }
  useEffect(() => {
    cerrarMenu()
  }, [pathname])

  // const abrirNuevaPestana = () => {
  //   window.open('/admin-page-ic/inicio-dashboard', '_blank') // Abre '/otra-pagina' en una nueva pestaña
  // }

  return (

    <header className='header'>

      <nav className='nav'>
        <div className='navInsignia'>
          <Link to='/inicio'>
            <img
              src={insignia}
              title='Insignia del Colegio Inmaculada Concepción de María'
            />
          </Link>
        </div>

        <a href='#menu' className='navMenu'>
          <RiMenu3Fill className='iconosAbrirCerrar' />
        </a>
        <a href='#' className='navMenu nav__menu__second' ref={ancorsan}>
          <RiCloseFill className='iconosAbrirCerrar' />
        </a>

        <ul className='menus' id='menu'>
          <MenuItem
            redireccion='/'
            claseAdicional='botonInicio'
            componenteIcon={<RiHome3Line className='menusIcon' />}
            texto='Inicio'
          />

          <MenuItem
            componenteIcon={<RiSchoolLine className='menusIcon' />}
            texto='Institución'
            submenu
            iconoFlecha
            input
            a
            array={[
              {
                texto: 'Nuestra Historia',
                redireccion: 'historia'
              },
              {
                texto: 'Quiénes Somos',
                redireccion: 'quienes-somos'
              },
              {
                texto: 'Galería',
                redireccion: 'galeria'
              }
            ]}
          />
          <MenuItem
            redireccion='/admision'
            componenteIcon={<RiDoorOpenLine className='menusIcon' />}
            texto='Admisión'
          />

          <MenuItem
            componenteIcon={<BsBarChartSteps className='menusIcon' />}
            texto='Niveles'
            submenu
            iconoFlecha
            a
            input
            array={[
              {
                texto: 'Inicial',
                redireccion: 'inicial'
              },
              {
                texto: 'Primaria',
                redireccion: 'primaria'
              }
            ]}
          />

          <MenuItem
            componenteIcon={<IoDocumentAttachOutline className='menusIcon' />}
            texto='Docs. de la I.E.P'
            submenu
            iconoFlecha
            a
            input
            array={[
              {
                texto: 'Inicial',
                redireccion: 'inicial'
              },
              {
                texto: 'Primaria',
                redireccion: 'primaria'
              }
            ]}
          />

          <MenuItem
            componenteIcon={<MdOutlineSchool className='menusIcon' />}
            texto='Propuesta Educativa'
            submenu
            a
            iconoFlecha
            input
            array={[
              {
                texto: 'Metodología',
                redireccion: 'metodologia'
              }
            ]}
          />

          <MenuItem
            redireccion='/noticias'
            componenteIcon={<FaRegNewspaper className='menusIcon' />}
            texto='Noticias'
          />
          <MenuItem
            redireccion='/contactenos'
            componenteIcon={<RiContactsBook2Line className='menusIcon' />}
            texto='Contáctenos'
          />
          <span className='separador'>|</span>
          <MenuItem
            redireccion='/admin-page-ic/login'
            componenteIcon={<MdOutlineAdminPanelSettings className='menusIcon menusIconPanel' />}
            texto='Panel'
          />
        </ul>

      </nav>
    </header>
  )
}
