/* eslint-disable react/jsx-indent */
import { Alert, Form, Notificacion, ViewDetail, ViewDirectivas } from '../../components'
import { MdCloudUpload } from 'react-icons/md'
import { useUploadFile } from '../../hooks'
import { useForm } from 'react-hook-form'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarData, eliminarData } from '../../../../store/colegio/thunks'
import { fileUploadClaudinary } from '../../../../colegio/helpers'
import Persona from '../../entidades/Persona'
import './somosPageDashboard.css'

export const SomosPageDashboard = () => {
  const dispatch = useDispatch()
  const [saving, setSaving] = useState(false)
  const { somosPage, reading } = useSelector((state) => state.estructuraWebColegial)
  const { planaDirectiva } = somosPage
  const [alertView, setAlertView] = useState(false)
  const [idItem, setIdItem] = useState(null)

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
        message: 'La foto es requerido',
        shouldFocus: true
      })
  }

  const enviarDatos = async (data) => {
    const URL = await fileUploadClaudinary(data.dFoto, 'somos-page')
    const persona = new Persona(data.dName, data.dCargo, URL)
    const dataObjetoPlano = persona.objetoPlano()
    dispatch(agregarData('somosPage', 'planaDirectiva', 'planaDirectivaArray', dataObjetoPlano))

    reset()
    setFileState({ fileObj: null, base64: null })
    mostrarNotificacion()
  }

  const mostrarNotificacion = () => {
    setSaving(true)

    setTimeout(() => {
      setSaving(false)
    }, 4000)
  }

  const borrarData = () => {
    dispatch(eliminarData('somosPage', 'planaDirectiva', 'planaDirectivaArray', idItem))
  }
  const mostrarAlert = () => setAlertView(true)

  const confirm = () => {
    setAlertView(false)
    borrarData()
  }
  const denied = () => setAlertView(false)
  return (
    <div className='somosPageDashboard'>
      {alertView &&
      <Alert
        denied={denied}
        confirm={confirm}
      />}
        {saving
          ? <Notificacion
              type='success'
              titulo='Agregado con éxito'
              texto='Se agrego un nuevo personal'
              desmontar={() => setSaving(false)}
            />
          : null}
      <ViewDetail titulo='Agregar Plana Directiva'>
        <Form
          onsubmitForm={handleSubmit(onSubmit)}
        >
          <input
            className='inputFormData'
            placeholder='Nombre'
            type='text'
            {...register('dName', {
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
          {errors.dName &&
            <span className='errorMessage'>
              {errors.dName.message}
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
          <input
            className='inputFormData'
            placeholder='Cargo'
            type='text'
            {...register('dCargo', {
              required: 'Cargo requerido',
              minLength: {
                value: 2,
                message: 'Debe tener al menos dos letras'
              },
              maxLength: {
                value: 20,
                message: 'Debe tener máximo 20 caracteres'
              },
              validate: (value) => {
                return value.trim().length >= 1 || 'Complete el campo correctamente'
              }
            })}
          />
          {errors.dCargo &&
            <span className='errorMessage'>
              {errors.dCargo.message}
            </span>}
          <button className='btnAgregarDirectiva'>
            AGREGAR
          </button>
        </Form>
      </ViewDetail>
      <ViewDetail
        titulo='Plana Directiva:'
      >
        {reading && <h1>Cargando...</h1>}
       <ViewDirectivas
         planaDirectiva={planaDirectiva}
         setIdItem={setIdItem}
         mostrarAlert={mostrarAlert}
       />
      </ViewDetail>
    </div>
  )
}
