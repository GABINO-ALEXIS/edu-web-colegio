/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import { Card } from '../'
import { m, AnimatePresence } from 'framer-motion'
import './Tabs.css'

const imagen = 'https://img.freepik.com/foto-gratis/ninos-tiro-completo-dibujando-juntos-mesa_23-2149355185.jpg?w=1060&t=st=1703274868~exp=1703275468~hmac=180ce077c1e8dad4564854afffbff8b4624ed430bef495bd83fa73b0543a0b9e'
const imagen2 = 'https://img.freepik.com/foto-gratis/ninos-tiro-completo-maestro-mesa_23-2149355190.jpg?w=1060&t=st=1703274979~exp=1703275579~hmac=fafd3546bdc0082ad1e88853b849d46594ce205504489ddc89c45f0114ebcede'

export const Tabs = () => {
  const [mostrar, setMostrar] = useState(true)

  return (
    <div className='contenedorTab'>
      <div className='contenedorBotones'>
        <button
          onClick={() => setMostrar(true)}
          className={mostrar ? 'activo' : 'apagado'}
        >
          Inicial
        </button>
        <button
          onClick={() => setMostrar(false)}
          className={mostrar ? 'apagado' : 'activo'}
        >
          Primaria
        </button>
      </div>
      <AnimatePresence>
        {mostrar
          ? <m.span>
            <Card
              titulo1='Programa Educativo'
              titulo2='Edades Atendidas'
              titulo3='Horario'
              img={imagen}
              altImagen='niños jugando'
              redireccion='/inicial'
            />
          </m.span>
          : <Card
              titulo1='lorem lorem'
              titulo2='todas las edades'
              titulo3='loremm'
              img={imagen2}
              altImagen='niños jugando'
              redireccion='/primaria'
            />}
      </AnimatePresence>
    </div>
  )
}
