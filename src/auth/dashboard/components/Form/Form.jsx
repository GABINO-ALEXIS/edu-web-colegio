import './Form.css'

export const Form = ({ children, onsubmitForm }) => {
  return (
    <form
      className='formDatos'
      onSubmit={onsubmitForm}
    >
      {children}
    </form>
  )
}
