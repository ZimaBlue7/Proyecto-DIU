import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";

import '../../Styles/Dashboard/navegacion.css'

export default function Navegacion(props) {

  const navigate = useNavigate();


  return (
    <div className={props.actiMenu ? 'bodyNavegacion active' : 'bodyNavegacion'}>
      <div className='conBtnToggle'>
        <button onClick={ () => {
          props.actiToggle()
        }}><ion-icon name="reorder-three-outline"></ion-icon></button>
      </div>
      <div className='contRutas'>
        <ul>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>Home</span>
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>User</span>
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>Pagina</span>
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>Tareas</span>
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>Sedes</span>
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link className='link' to=''>
              <div className='icon'><ion-icon name="barcode-outline"></ion-icon></div>
              <span className='text'>Mensajes</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='contBtnSignOff'>
        <button>
          <span>Sign off</span>
          <div className='icon'>
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
        </button>
      </div>
    </div>
  )
}
