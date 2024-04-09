import {
  WavesBottom,
  WavesBottomReverse,
  WavesTop,
  WavesTopOpacity,
  WavesTopReverse
} from '../'
import './Seccion.css'

export const Seccion = ({ children, claseAdicional, waves, wavesReverse, wavesTopOpacity }) => {
  return (
    <section className={`componenteSeccion ${claseAdicional || ''}`}>

      {waves &&
        <>
          <WavesTop />
          <WavesBottom colorFondo='wavesAmarillo' />
        </>}
      {wavesReverse &&
        <>
          <WavesTopReverse />
          <WavesBottomReverse />
        </>}
      {wavesTopOpacity &&
        <>
          <WavesBottom colorFondo='wavesAmarillo' />
          <WavesTopOpacity />
        </>}

      {children}
    </section>
  )
}
