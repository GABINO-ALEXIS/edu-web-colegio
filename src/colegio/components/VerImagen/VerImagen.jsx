import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import './VerImagen.css'
import { useState } from 'react'

export const VerImagen = ({ id = 1, fotos, cerrarImg }) => {
  const [count, setCount] = useState(parseInt(id))

  const imagenAnterior = () => {
    if (count === 1) return
    setCount(count - 1)
  }

  const imagenPosterior = () => {
    if (count === fotos.length) return
    setCount(count + 1)
  }
  const foto = fotos.find(foto => foto.id === count)

  const cerrarImagen = () => {
    document.body.style.overflow = 'visible'
    cerrarImg(false)
  }

  return (
    <div className='verImagenContent'>
      <FaCaretLeft
        className='botonLR botonL'
        onClick={imagenAnterior}
      />
      <figure className='figure'>
        <IoClose
          className='btnCerrarImagen'
          onClick={cerrarImagen}
        />
        <img src={foto.url} alt={foto.titulo} />
        <span className='totalDeImagenes'>
          {`${count} de ${fotos.length}`}
        </span>
      </figure>
      <FaCaretRight
        className='botonLR botonR'
        onClick={imagenPosterior}
      />
    </div>
  )
}
