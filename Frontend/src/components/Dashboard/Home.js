import React, { useContext, useEffect } from 'react'
import UserAdminContext from '../../Context/UserAdmin/UserAdminContext'
import ProductContext from '../../Context/Products/ProductContext'

import '../../Styles/Dashboard/homeAdmin.css'

export default function homeAdmin() {

  const userContext = useContext(UserAdminContext);
  const {getUsers, datos} = userContext;

  const productContext = useContext(ProductContext);
  const {getProduct, listProduct} = productContext;

  useEffect(() => {
    getUsers();
    getProduct();
  })

  return (
    <div className='contHomeAdmin'>
      <div className='resumenDatos'>
        <div className='totalUser'>
          <h1>{datos ? datos.length : '0'} </h1>
          <span className='iconCard'>
            <ion-icon name="people-outline"></ion-icon>
          </span>
        </div>
        <div className='totalProduct'>
          <h1>{listProduct ? listProduct.length : '0'}</h1>
          <span className='iconCard'>
            <ion-icon name="file-tray-stacked-outline"></ion-icon>
          </span>
        </div>
        <div className='totalPedidos'>
          <h1>0</h1>
          <span className='iconCard'>
            <ion-icon name="receipt-outline"></ion-icon>
          </span>
        </div>
        <div className='totalDinero'>
          <h1>$0</h1>
          <span className='iconCard'>
            <ion-icon name="cash-outline"></ion-icon>
          </span>
        </div>
      </div>
      <div className='datosRecientes'>
        <div className='contUserRecientes'>
          <h3>Usuarios</h3>
          <div className='listUserRecientes'>
            
            {
              datos && datos.length > 0 ? datos.map( dato => {
                return <div className='itemUser'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png' alt='' />
                  <p>{dato.nombre + " " + dato.apellido}</p>
                  <p>{dato.rol}</p>
                </div>
              } ) : <></>
            }

            <div className='itemUser headerItemUser'>
              <p>Icon</p>
              <p>Nombre</p>
              <p>Rol</p>
            </div>

          </div>
        </div>
        <div className='contTareasRecientes'>
          <h3>Tareas</h3>
          <p>No se han agregado tareas</p>
        </div>
      </div>
      {/*<div className='graficosProductoTem'>
        
      </div>
          <div className='comentariosRecinetes'></div>*/}
    </div>
  )
}
