import React, { useState } from 'react'

import '../../Styles/Carrito/carrito.css'
import ItemProduct from './ItemProduct';

export default function Carrito() {

    const [activeListProduct, setActiveLP] = useState(true);
    const [activeFactura, setActiveF] = useState(false);

  return (
    <div className='bodyCarrito'>
        <h1>CARRITO DE COMPRAS</h1>
        <div className='contListWish'>
            <div className={activeListProduct ? 'contListProduct active' : 'contListProduct' }>
                <div className='contTitle'>
                    <h3>List Product</h3>
                    <button onClick={() => {
                        setActiveLP(!activeListProduct)
                    }}>{ activeListProduct ? <span class="material-symbols-outlined">expand_more</span> : <span class="material-symbols-outlined">
                    expand_less
                    </span>}</button>
                </div>
                <div className='contTabla'>
                    <ItemProduct />
                    <ItemProduct />
                </div>
            </div>
            <div className={activeFactura ? 'contFactura active' : 'contFactura' }>
                <div className='contTitle'>
                    <h3>Factura</h3>
                    <button onClick={() => {
                        setActiveF(!activeFactura)
                    }}>{ activeFactura ? <span class="material-symbols-outlined">expand_more</span> : <span class="material-symbols-outlined">
                    expand_less
                    </span>}</button>
                </div>
                <div className='contDatos'></div>
                <div className='contButton'>
                    <button>REALIZAR COMPRA</button>
                </div>
            </div>
        </div>
    </div>
  )
}
