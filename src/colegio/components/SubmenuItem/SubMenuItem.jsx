import { NavLink } from 'react-router-dom'
import './SubMenuItem.css'

export const SubMenuItem = ({ array }) => {
  return (
    <div className='menusContenido'>
      <ul className='submenus'>

        {array.map((element) => (
          <li className='submenusLi' key={element.texto}>
            <NavLink
              to={element.redireccion}
              className='submenuOpcion'
              key={element.texto}
            >{element.texto}
            </NavLink>
          </li>
        ))}

      </ul>
    </div>
  )
}
