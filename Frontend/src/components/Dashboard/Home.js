import React from 'react'

import '../../Styles/Dashboard/homeAdmin.css'

export default function homeAdmin() {
  return (
    <div className='contHomeAdmin'>
      <div className='resumenDatos'>
        <div className='totalUser'></div>
        <div className='totalProduct'></div>
        <div className='totalPedidos'></div>
        <div className='totalDinero'></div>
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
