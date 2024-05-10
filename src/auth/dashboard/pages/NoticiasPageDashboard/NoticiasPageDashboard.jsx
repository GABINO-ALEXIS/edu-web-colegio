/* eslint-disable react/jsx-indent */
import { Form, ViewDetail } from '../../components'
import { useUploadFile } from '../../hooks'
import { MdCloudUpload } from 'react-icons/md'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import './NoticiasPageDashboard.css'
import Noticia from '../../entidades/Noticia'
import { fileUploadClaudinary } from '../../../../colegio/helpers'
import { useDispatch } from 'react-redux'
import { agregarData } from '../../../../store/colegio/thunks'

const NoticiasPageDashboard = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset
  } = useForm()

  const {
    fileState,
    setFileState,
    onChangeFile,
    dragEnter,
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
    fileRef
  } = useUploadFile(clearErrors)
  const { fileObj, base64 } = fileState || {}

  useMemo(() => setValue('dFoto', fileObj), [fileObj])

  const onSubmit = (data) => {
    setValue('dFoto', fileObj)

    data.dFoto
      ? enviarDatos(data)
      : setError('dFoto', {
        type: 'required',
        message: 'La imagen es requerido',
        shouldFocus: true
      })
  }

  const enviarDatos = async (data) => {
    console.log(data)
    const { nTitulo, dFoto, nDescripcion, nFecha } = data
    const URL = await fileUploadClaudinary(dFoto, 'noticias-page')
    const noticia = new Noticia(nTitulo, nDescripcion, nFecha, URL)
    const dataObjetoPlano = noticia.objetoPlano()
    dispatch(agregarData('noticiasPage', 'noticias', 'noticiasArray', dataObjetoPlano, nFecha))

    console.log(dataObjetoPlano)
    // reset()
    // setFileState({ fileObj: null, base64: null })
    // mostrarNotificacion()
  }

  const onChange = (e) => {
    const f = e.target.value

    const fecha = new Date(f)

    console.log(fecha)
  }

  return (
    <div className='noticiasPageDashboard'>
      <ViewDetail titulo='Agregar Noticia'>
        <Form onsubmitForm={handleSubmit(onSubmit)}>
          <input
            className='inputFormData'
            placeholder='Titulo de la noticia'
            type='text'
            {...register('nTitulo', {
              required: 'Nombre requerido',
              minLength: {
                value: 2,
                message: 'Debe tener al menos dos letras'
              },
              maxLength: {
                value: 40,
                message: 'Debe tener máximo 40 caracteres'
              },
              validate: (value) => {
                return value.trim().length >= 1 || 'Complete el campo correctamente'
              }
            })}
          />
          {errors.nTitulo &&
            <span className='errorMessage'>
              {errors.nTitulo.message}
            </span>}
          <div
            className={`unploadFileContainer ${dragEnter ? 'dragEnter' : ''}`}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            {base64
              ? <img src={base64} alt='' className='fileImage' />
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
            />
            <button
              style={{ zIndex: dragEnter ? -10 : 0 }}
              className='btnUploadFile'
              onClick={(e) => {
                e.preventDefault()
                fileRef.current.click()
              }}
            >
              {base64 ? 'CAMBIAR IMAGEN' : 'SELECCIONAR IMAGEN'}
            </button>
          </div>
          {errors.dFoto &&
            <span className='errorMessage'>
              {errors.dFoto.message}
            </span>}
            <textarea
              className='textAreaForm'
              placeholder='Descripción de la noticia. . .'
              {...register('nDescripcion', {
                required: 'Descripción requerido',
                minLength: {
                  value: 35,
                  message: 'Debe tener al menos 35 caracteres'
                },
                maxLength: {
                  value: 340,
                  message: 'Debe tener máximo 340 caracteres'
                }
              })}
            />
            {errors.nDescripcion &&
            <span className='errorMessage'>
              {errors.nDescripcion.message}
            </span>}
          <input
            className='inputFormData'
            type='date'
            onChange={onChange}
            {...register('nFecha', {
              required: 'Fecha requerido'
            })}
          />
          {errors.nFecha &&
            <span className='errorMessage'>
              {errors.nFecha.message}
            </span>}
          <button className='btnAgregarDirectiva'>
            AGREGAR
          </button>
        </Form>
      </ViewDetail>
    </div>
  )
}

export default NoticiasPageDashboard
