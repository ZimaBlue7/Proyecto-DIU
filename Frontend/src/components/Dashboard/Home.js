import React, { useContext, useEffect } from 'react'
import UserAdminContext from '../../Context/UserAdmin/UserAdminContext'

import '../../Styles/Dashboard/homeAdmin.css'

export default function homeAdmin() {

  const userContext = useContext(UserAdminContext);
  const {getUsers} = userContext;

  useEffect(() => {
    getUsers();
  })

  return (
    <div className='contHomeAdmin'>
      <div className='resumenDatos'>
        <div className='totalUser'>
          <h1>5</h1>
          <span className='iconCard'>
            <ion-icon name="people-outline"></ion-icon>
          </span>
        </div>
        <div className='totalProduct'>
          <h1>5</h1>
          <span className='iconCard'>
            <ion-icon name="people-outline"></ion-icon>
          </span>
        </div>
        <div className='totalPedidos'>
          <h1>5</h1>
          <span className='iconCard'>
            <ion-icon name="receipt-outline"></ion-icon>
          </span>
        </div>
        <div className='totalDinero'>
          <h1>$5</h1>
          <span className='iconCard'>
            <ion-icon name="cash-outline"></ion-icon>
          </span>
        </div>
      </div>
      <div className='datosRecientes'>
        <div className='contUserRecientes'></div>
        <div className='contTareasRecientes'></div>
      </div>
      <div className='graficosProductoTem'>
        
      </div>
      <div className='comentariosRecinetes'></div>
    </div>
  )
}
