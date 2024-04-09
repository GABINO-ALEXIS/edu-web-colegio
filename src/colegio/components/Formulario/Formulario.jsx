import './Formulario.css'

export const Formulario = () => {
  return (
    <form className='formularioContent'>
      <input
        type='text'
        placeholder='Ingrese nombres y apellidos *'
        required
      />
      <input
        type='email'
        placeholder='Ingrese su correo *'
        required
      />
      <textarea
        cols='30'
        rows='10'
        placeholder='Mensaje...'
      />

      <button className='btnSubmit'>Enviar</button>
    </form>
  )
}
