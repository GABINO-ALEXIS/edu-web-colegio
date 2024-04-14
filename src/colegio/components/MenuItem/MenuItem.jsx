import { SubMenuItem } from '../'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import './MenuItem.css'

export const MenuItem = ({ a, redireccion, claseAdicional, componenteIcon, texto, submenu, iconoFlecha, input, array }) => {
  const ClaseAdicional = claseAdicional || ''

  return (
    <li className='menusListasLi'>

      {a
        ? (
          <a href={redireccion} className={`menusLink ${ClaseAdicional}`}>

            {componenteIcon}
            <span className='menuOpcion'>{texto}</span>
            {iconoFlecha && <RiArrowDropDownFill className='menusFlechas' />}

            {input && (
              <input type='checkbox' className='menusCheck' />
            )}
          </a>)
        : (<NavLink to={redireccion} className={`menusLink ${ClaseAdicional}`}>

          {componenteIcon}
          <span className='menuOpcion'>{texto}</span>
          {iconoFlecha && <RiArrowDropDownFill className='menusFlechas' />}

          {input && (
            <input type='checkbox' className='menusCheck' />
          )}
           </NavLink>)}

      {submenu && (
        <SubMenuItem array={array} />
      )}
    </li>
  )
}
