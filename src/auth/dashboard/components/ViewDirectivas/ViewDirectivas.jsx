import './ViewDirectivas.css'
import { CardItem } from '../'

export const ViewDirectivas = ({ planaDirectiva = [], setIdItem, mostrarAlert }) => {
  return (
    <div className='viewDirectivasContainer'>

      {planaDirectiva.map(({ id, foto, nombre, ocupacion }) => (
        <CardItem
          key={id}
          foto={foto}
          nombre={nombre}
          ocupacion={ocupacion}
          id={id}
          setIdItem={setIdItem}
          mostrarAlert={mostrarAlert}
        />
      ))}
    </div>
  )
}
