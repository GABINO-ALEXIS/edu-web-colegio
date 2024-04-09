import { LazyMotion, domAnimation } from 'framer-motion'
import { RouterApp } from './router/RouterApp'
import './ColegioApp.css'

function ColegioApp () {
  return (
    <LazyMotion features={domAnimation}>
      <RouterApp />
    </LazyMotion>
  )
}

export default ColegioApp
