import React from 'react'

import '../../../Styles/Dashboard/sedeAdmin.css'

export default function SedeAdmin() {
  return (
    <div className='bodySedeAdmin'>
      <CardSede />
      <CardSede />
      <CardSede />
      <CardSede />
    </div>
  )
}


function CardSede(props) {
  return <div className='contCardSede'>
    <div className='headerCont'>
      <h2>Nombre</h2>
      <div className='contBtnVerMas'>
        <button>
          Ver mas
        </button>
      </div>
    </div>
    <div className='contInfoData'>
      <div className='contDatos'>
        <div className='contDatosGenerales'>
          <div className='itemDatoGen'>
            <ion-icon name="people-circle-outline"></ion-icon>
            <p>0 Empleados</p>
          </div>
          <div className='itemDatoGen'>
            <ion-icon name="pricetags-outline"></ion-icon>
            <p>0 Productos</p>
          </div>
          <div className='itemDatoGen'>
            <ion-icon name="images-outline"></ion-icon>
            <p>0 Fotos</p>
          </div>
          <div className='itemDatoGen'>
            <ion-icon name="file-tray-stacked-outline"></ion-icon>
            <p>0 Tareas</p>
          </div>
        </div>
        <div className='contDatosEspeficicos'>
          <div className='itemDatoEsp'>
            <ion-icon name="location-outline"></ion-icon>
            <p>Ubicacion: Cll 100 # 2A - 5</p>
          </div>
          <div className='itemDatoEsp'>
            <ion-icon name="call-outline"></ion-icon>
            <p>Telefono: #######</p>
          </div>
          <div className='itemDatoEsp'>
            <ion-icon name="body-outline"></ion-icon>
            <p>Gerente: Nombre gerente</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
