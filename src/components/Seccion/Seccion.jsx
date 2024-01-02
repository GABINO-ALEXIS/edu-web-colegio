import { WavesBottom } from '../WavesBottom/WavesBottom'
import { WavesBottomReverse } from '../WavesBottomReverse/WavesBottomReverse'
import { WavesTop } from '../WavesTop/WavesTop'
import { WavesTopReverse } from '../WavesTopReverse/WavesTopReverse'
import './Seccion.css'

export const Seccion = ({ children, claseAdicional, waves, wavesReverse }) => {
  return (
    <section className={`componenteSeccion ${claseAdicional || ''}`}>

      {waves &&
        <>
          <WavesTop />
          <WavesBottom />
        </>}
      {wavesReverse &&
        <>
          <WavesTopReverse />
          <WavesBottomReverse />
        </>}

      {children}
    </section>
  )
}
