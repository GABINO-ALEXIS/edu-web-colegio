import './ViewDetail.css'

export const ViewDetail = ({ titulo, children, clases }) => {
  return (
    <section className='viewDetailContainer'>
      <div className='viewDetailTitle'>
        <h3>{titulo}</h3>
      </div>
      <div className={`viewDetailContent ${clases}`}>
        {children}
      </div>
    </section>
  )
}
