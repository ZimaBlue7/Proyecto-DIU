import React from 'react'

import '../../Styles/Carrito/itemCarrito.css'
import fototest from '../../Assets/img/aceta.jpg'

import defaultImg from '../../Assets/farmacia.png'

export default function ItemProduct(props) {
  return (
    <div className='bodyItemProduct'>

        <img src={defaultImg} alt=''></img>
        <div className='contDatoProduct'>
            <h4>{props.dato.id + " - " + props.dato.nombre}</h4>
            <p>{ props.dato.cantidad + " x " + props.dato.precio + "und"  }</p>
            <div className='contButtonItem'>
                <button onClick={() => {
                  props.dato.cantidad += 1
                  props.updateProduct(props.dato)
                }} className='btnInc'>+</button>
                <button onClick={() => {
                  props.deleteProduct(props.dato.id)
                }} className='btnDelete'><ion-icon name="trash-outline"></ion-icon></button>
                <button onClick={() => {
                  props.dato.cantidad -= 1
                  props.updateProduct(props.dato)
                }} className='btnDec'>-</button>
            </div>
        </div>
    </div>
  )
}
