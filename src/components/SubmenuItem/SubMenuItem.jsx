import './SubMenuItem.css'

export const SubMenuItem = ({ array }) => {
  return (
    <div className='menusContenido'>
      <ul className='submenus'>

        {array.map((element) => (
          <li className='submenusLi' key={element.texto}>
            <a
              href={element.redireccion}
              className='submenuOpcion'
              key={element.texto}
            >{element.texto}
            </a>
          </li>
        ))}

      </ul>
    </div>
  )
}
