import React from 'react'

import '../../Styles/General/notFound.css'

import defaultImg from '../../Assets/mantenimiento.png'
import Navegation from './Navegation'

export default function NotFound() {
  return (
    <div className='contNotFound'>
        <Navegation/>
        <img src={defaultImg} className='imgMantenimiento' alt='Not found'></img>
        <p>Pagina en mantenimiento</p>
    </div>
  )
}
