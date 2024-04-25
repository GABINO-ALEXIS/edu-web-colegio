import { collection, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { ValidationError } from '../../errors'

export const leerDocsPagina = async (pagina = '') => {
  if (!pagina) throw new ValidationError('Página de la colección no definida')
  const collectionRef = collection(FirebaseDB, `/estructuraWebColegial/paginas/${pagina}`)

  const { docs } = await getDocs(collectionRef)

  const documentos = {}

  docs.forEach((doc) => {
    documentos[doc.id] = { id: doc.id, ...doc.data() }
  })

  return { ...documentos }
}
