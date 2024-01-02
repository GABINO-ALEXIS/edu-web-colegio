import './MenuItem.css'
import { SubMenuItem } from '../SubmenuItem/SubMenuItem'
import { RiArrowDropDownFill } from 'react-icons/ri'

export const MenuItem = ({ redireccion, claseAdicional, componenteIcon, texto, submenu, iconoFlecha, input, array }) => {
  const ClaseAdicional = claseAdicional || ''
  return (
    <li className='menusListasLi'>
      <a href={redireccion} className={`menusLink ${ClaseAdicional}`}>
        {componenteIcon}
        <span className='menuOpcion'>{texto}</span>
        {iconoFlecha && <RiArrowDropDownFill className='menusFlechas' />}

        {input && (
          <input type='checkbox' className='menusCheck' />
        )}
      </a>
      {submenu && (
        <SubMenuItem array={array} />
      )}
    </li>
  )
}
