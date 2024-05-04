/* eslint-disable react/jsx-indent */
import { MdCloudUpload } from 'react-icons/md'
import { useUploadFile } from '../../hooks/useUploadFile'
import './UploadFile.css'

export const UploadFile = ({ setValue, setInputFile, clearErrors, resetImage }) => {
  const {
    dragEnter,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
    fileState,
    fileRef,
    onChangeFile
  } = useUploadFile(setValue, setInputFile, clearErrors, resetImage)

  return (
    <div
      className={`unploadFileContainer ${dragEnter ? 'dragEnter' : ''}`}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {fileState
        ? <img src={fileState} alt='' className='fileImage' />
        : <>
          <MdCloudUpload
            style={{ zIndex: dragEnter ? -10 : 0 }}
          />
          <span
            style={{ zIndex: dragEnter ? -10 : 0 }}
          >
            Arrastre y suelte aqui la imagen para subirla
          </span>
          <span
            style={{ zIndex: dragEnter ? -10 : 0 }}
          >Ó
          </span>
          </>}
      <input
        type='file'
        ref={fileRef}
        onChange={onChangeFile}
        style={{ display: 'none' }}
        accept='image/jpeg, image/png, image/webp'
        // {...validarCampo('dFoto', {
        //   required: 'Foto requerido'
        // })}
      />
      <button
        style={{ zIndex: dragEnter ? -10 : 0 }}
        className='btnUploadFile'
        onClick={(e) => {
          e.preventDefault()
          fileRef.current.click()
        }}
      >
        {fileState ? 'CAMBIAR IMAGEN' : 'SELECCIONAR IMAGEN'}
      </button>
    </div>
  )
}
