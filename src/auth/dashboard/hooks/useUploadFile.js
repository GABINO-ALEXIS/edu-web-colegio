import { useRef, useState } from 'react'
import { leerArchivo } from '../../../colegio/helpers'

export const useUploadFile = (clearErrors) => {
  const fileRef = useRef(null)
  const [dragEnter, setDragEnter] = useState(false)
  const [fileState, setFileState] = useState({
    fileObj: null,
    base64: null
  })

  const onChangeFile = async ({ target }) => {
    const file = target.files[0]
    const result = await leerArchivo(file)
    setFileState({ fileObj: file, base64: result })
    clearErrors('dFoto')
  }

  const onDragOver = e => e.preventDefault()
  const onDragEnter = () => setDragEnter(true)
  const onDragLeave = () => setDragEnter(false)

  const onDrop = async (e) => {
    e.preventDefault()
    setDragEnter(false)
    const file = e.dataTransfer.files[0]
    const cadena = file.name
    const indice = cadena.lastIndexOf('.')
    const extension = cadena.substr(indice)
    const isValid = extension === '.png' || extension === '.jpg'
    if (!isValid) return alert('Seleccione una imagen válida')
    const result = await leerArchivo(file)
    setFileState({ fileObj: file, base64: result })
    clearErrors('dFoto')
  }

  return {
    dragEnter,
    fileState,
    setFileState,
    fileRef,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
    onChangeFile
  }
}
