import './OlasSVG.css'
const OlasSVG = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className='waves'
    preserveAspectRatio='none'
    viewBox='0 24 150 28'
    {...props}
  >
    <defs>
      <path
        id='a'
        d='M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z'
      />
    </defs>
    <g className='parallax'>
      <use xlinkHref='#a' x={48} fill={props.color3} />
      <use xlinkHref='#a' x={48} y={5} fill={props.color2} />
      <use xlinkHref='#a' x={48} y={3} fill={props.color2} />
      <use xlinkHref='#a' x={48} y={7} fill={props.color1} />
    </g>
  </svg>
)
export default OlasSVG
