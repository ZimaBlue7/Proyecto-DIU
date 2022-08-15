import React, { useState, useContext, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom";

import UserContext from '../../Context/Users/UserContext';

import '../../Styles/Dashboard/navegacion.css'

export default function Navegacion(props) {

  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const {datosUser, verificarLogin} = userContext;

  useEffect(() => {

    const elem = window.localStorage.getItem('sucur-salud-proyect-diu-login')
    const dato = elem ? JSON.parse(elem) : null

    if( dato ){
      verificarLogin(dato);
    }        
    
  }, [])

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
            <Link className='link' to='/admin/pageusers'>
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
          
          {
            datosUser 
            ? datosUser.rol === 'admin'
              ? <>
                  <li>
                    <Link className='link' to='/admin/tareas'>
                      <div className='icon'><ion-icon name="clipboard-outline"></ion-icon></div>
                      <span className='text'>Tareas</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to='/admin/sedes'>
                      <div className='icon'><ion-icon name="storefront-outline"></ion-icon></div>
                      <span className='text'>Sedes</span>
                    </Link>
                  </li>
                </>
              : <li>
                  <Link className='link' to='/admin/sede'>
                    <div className='icon'><ion-icon name="storefront-outline"></ion-icon></div>
                    <span className='text'>Sede</span>
                  </Link>
                </li>
            : <></>
          }
          
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
