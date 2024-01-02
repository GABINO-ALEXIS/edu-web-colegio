import './Header.css'
import Insignia from '../../assets/Iconos/insignia.png'
import { RiMenu3Fill, RiCloseFill, RiHome3Line, RiSchoolLine, RiContactsBook2Line, RiDoorOpenLine } from 'react-icons/ri'
import { MdOutlineSchool } from 'react-icons/md'
import { BsBarChartSteps } from 'react-icons/bs'
import { MenuItem } from '../../components/MenuItem/MenuItem'

export const Header = () => {
  return (

    <header className='header'>

      <nav className='nav'>

        <div className='navInsignia'>
          <img src={Insignia} title='Insignia del Colegio Inmaculada Concepción de María' />
        </div>
        <a href='#menu' className='navMenu'>
          <RiMenu3Fill className='iconosAbrirCerrar' />
        </a>
        <a href='#' className='navMenu nav__menu__second'>
          <RiCloseFill className='iconosAbrirCerrar' />
        </a>

        <ul className='menus' id='menu'>
          <MenuItem
            redireccion='#'
            claseAdicional='botonInicio'
            componenteIcon={<RiHome3Line className='menusIcon' />}
            texto='Inicio'
          />

          <MenuItem
            redireccion='#'
            componenteIcon={<RiSchoolLine className='menusIcon' />}
            texto='Institución'
            submenu
            iconoFlecha
            input
            array={[
              {
                texto: 'Historia',
                redireccion: 'https://react-svgr.com/playground/'
              },
              {
                texto: 'Administración y Personal',
                redireccion: '#'
              },
              {
                texto: 'Reglamento Interno',
                redireccion: '#'
              }
            ]}
          />
          <MenuItem
            redireccion='#'
            componenteIcon={<RiDoorOpenLine className='menusIcon' />}
            texto='Admisión'
          />

          <MenuItem
            redireccion='#'
            componenteIcon={<BsBarChartSteps className='menusIcon' />}
            texto='Niveles'
            submenu
            iconoFlecha
            input
            array={[
              {
                texto: 'Preescolar',
                redireccion: '#'
              },
              {
                texto: 'Primaria',
                redireccion: '#'
              }
            ]}
          />

          <MenuItem
            redireccion='#'
            componenteIcon={<MdOutlineSchool className='menusIcon' />}
            texto='Propuesta Educativa'
            submenu
            iconoFlecha
            input
            array={[
              {
                texto: 'Calendarización Escolar',
                redireccion: '#'
              },
              {
                texto: 'Opción 2',
                redireccion: '#'
              }
            ]}
          />

          <MenuItem
            redireccion='#'
            componenteIcon={<RiContactsBook2Line className='menusIcon' />}
            texto='Contáctenos'
          />
        </ul>

      </nav>
    </header>
  )
}
