import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";

import '../../Styles/Dashboard/navegacion.css'

export default function Navegacion(props) {

  const navigate = useNavigate();


  return (
    <div className={props.actiMenu ? 'bodyNavegacionAdmin active' : 'bodyNavegacionAdmin'}>
      <div className='conBtnToggle'>
        <button onClick={ () => {
          props.actiToggle()
        }}><ion-icon name="reorder-three-outline"></ion-icon></button>
      </div>
      <div className='contRutas'>
        <ul>
          <li>
            <Link className='link' to='/admin'>
              <div className='icon'><ion-icon name="home-outline"></ion-icon></div>
              <span className='text'>Home</span>
            </Link>
          </li>
          <li>
            <Link className='link' to='/admin/mantenimiento'>
              <div className='icon'><ion-icon name="people-circle-outline"></ion-icon></div>
              <span className='text'>Users</span>
            </Link>
          </li>
          <li>
            <Link className='link' to='/admin/mantenimiento'>
              <div className='icon'><ion-icon name="globe-outline"></ion-icon></div>
              <span className='text'>Pagina</span>
            </Link>
          </li>
          <li>
            <Link className='link' to='/admin/mantenimiento'>
              <div className='icon'><ion-icon name="clipboard-outline"></ion-icon></div>
              <span className='text'>Tareas</span>
            </Link>
          </li>
          <li>
            <Link className='link' to='/admin/mantenimiento'>
              <div className='icon'><ion-icon name="storefront-outline"></ion-icon></div>
              <span className='text'>Sedes</span>
            </Link>
          </li>
          <li>
            <Link className='link' to='/admin/mantenimiento'>
              <div className='icon'><ion-icon name="receipt-outline"></ion-icon></div>
              <span className='text'>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link className='link' to='/admin/mantenimiento'>
              <div className='icon'><ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
              <span className='text'>Mensajes</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='contBtnSignOff'>
        <button onClick={ () => {
          navigate('/')
        } }>
          <span>Sign off</span>
          <div className='icon'>
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
        </button>
      </div>
    </div>
  )
}
