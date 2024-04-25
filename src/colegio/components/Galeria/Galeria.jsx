import { useSelector } from 'react-redux'
import { m } from 'framer-motion'
import { VerImagen } from '../VerImagen/VerImagen'
import { useState } from 'react'

export const Galeria = () => {
  const [imgVisible, setImgVisible] = useState(false)
  const [idImg, setIdImg] = useState(1)
  const { galeriaPage } = useSelector(state => state.estructuraWebColegial)
  const { fotos } = galeriaPage

  const enviarId = ({ target }) => {
    document.body.style.overflow = 'hidden'
    setImgVisible(true)
    setIdImg(target.id)
  }

  return (
    <>
      {imgVisible &&
        <VerImagen
          fotos={fotos}
          id={idImg}
          cerrarImg={setImgVisible}
        />}
      {fotos.map(({ id, url, titulo }) => (
        <m.div
          key={id}
          onClick={enviarId}
          className='imagenItem'
          whileInView={{
            opacity: [0, 1]
          }}
          transition={{
            duration: 1.5
          }}
          viewport={{
            once: true
          }}
          id={id}
        >
          <img
            src={url}
            alt={titulo}
          />
        </m.div>
      ))}
    </>
  )
}
