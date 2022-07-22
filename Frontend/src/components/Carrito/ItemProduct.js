import React from 'react'

import '../../Styles/Carrito/itemCarrito.css'
import fototest from '../../Assets/img/aceta.jpg'

export default function ItemProduct() {
  return (
    <div className='bodyItemProduct'>

        <img src={fototest} alt=''></img>
        <div className='contDatoProduct'>
            <h4>Nombre Product</h4>
            <p>20 x $1000und</p>
            <div className='contButtonItem'>
                <button className='btnInc'>+</button>
                <button className='btnDelete'><ion-icon name="trash-outline"></ion-icon></button>
                <button className='btnDec'>-</button>
            </div>
        </div>
    </div>
  )
}
