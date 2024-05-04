import { useRef, useState, useMemo } from 'react'
import { leerArchivo } from '../../../colegio/helpers'

export const useUploadFile = (setValue, setInputFile, clearErrors, resetImage) => {
  const fileRef = useRef(null)
  const [dragEnter, setDragEnter] = useState(false)
  const [fileState, setFileState] = useState(null)

  const onChangeFile = async ({ target }) => {
    const fileValid = target.files[0]
    if (!fileValid) return setValue('dFoto', 'Foto requerido')
    const result = await leerArchivo(target.files[0])
    setFileState(result)
    setValue('dFoto', result)
    clearErrors('dFoto')
    setInputFile(true)
  }

  const onDragOver = e => e.preventDefault()
  const onDragEnter = () => setDragEnter(true)
  const onDragLeave = () => setDragEnter(false)

  const onDrop = async (e) => {
    e.preventDefault()
    setDragEnter(false)
    console.log(e.dataTransfer.files[0].name)
    const result = await leerArchivo(e.dataTransfer.files[0])
    setFileState(result)
    setValue('dFoto', result)
    clearErrors('dFoto')
    setInputFile(true)
  }

  useMemo(() => resetImage && setFileState(null), [resetImage])

  return {
    dragEnter,
    fileState,
    fileRef,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
    onChangeFile
  }
}
