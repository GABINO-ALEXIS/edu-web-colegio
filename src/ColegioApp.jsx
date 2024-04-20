import { LazyMotion, domAnimation } from 'framer-motion'
import { RouterApp } from './router/RouterApp'
import './ColegioApp.css'
import { Prueba } from './styles/Prueba'

function ColegioApp () {
  return (
    <LazyMotion features={domAnimation}>
      <RouterApp />
      {/* <Prueba /> */}
    </LazyMotion>
  )
}

export default ColegioApp
