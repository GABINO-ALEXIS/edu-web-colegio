import { Form, UploadFile, ViewDetail } from '../../components'
import { useForm } from 'react-hook-form'
import './somosPageDashboard.css'
import { useState } from 'react'

export const SomosPageDashboard = () => {
  const [inputFile, setInputFile] = useState(false)
  const [resetImage, setResetImage] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset
  } = useForm()

  const enviarDatos = (data) => {
    alert(`datos enviados...${JSON.stringify(data)}`)
    reset()
    setResetImage(true)
    console.log('datos:', data)
  }
  const onSubmit = (data) => {
    inputFile
      ? enviarDatos(data)
      : setError('dFoto', {
        type: 'required',
        message: 'La foto es requerido',
        shouldFocus: true
      })
  }
  console.log(errors)
  return (
    <div className='somosPageDashboard'>
      <ViewDetail titulo='Plana Directiva'>
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
          <UploadFile
            setValue={setValue}
            setInputFile={setInputFile}
            clearErrors={clearErrors}
            resetImage={resetImage}
          />
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
    </div>
  )
}
