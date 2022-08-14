import React from 'react'

import '../../Styles/General/notFound.css'

import defaultImg from '../../Assets/mantenimiento.png'

export default function NotFound() {
  return (
    <div className='contNotFound' style={{height: '100%'}}>
        <img src={defaultImg} className='imgMantenimiento' alt='Not found'></img>
        <p>Pagina en mantenimiento</p>
    </div>
  )
}
