import React from 'react'

import '../../Styles/Menu/viewProduct.css'
import imgTest from '../../Assets/card2.png'

export default function ViewProduct() {
  return (
    <div className='viewProduct'>
        <div className='contImg'>
            <div className='masFotos'>
                <button>
                    <img src={imgTest} alt='Not found'></img>
                </button>
                <button>
                    <img src={imgTest} alt='Not found'></img>
                </button>
                <button>
                    <img src={imgTest} alt='Not found'></img>
                </button>
                <button>
                    <img src={imgTest} alt='Not found'></img>
                </button>
            </div>
            <div className='imgPrincipal'>
                <img src={imgTest} alt='Not found'></img>
                <div className='contUnidDisp'>
                    <p>Unidades disponibles:</p>
                    <p><span>10 </span>Ud</p>
                </div>
            </div>
        </div>
        <div className='contInfo'>
            <div className='contText'>
                <h1>Metcocarbamil - 750 mg</h1>
                <h4>Paquete x 1 ud</h4>
                <h3>Precio: $ 70.000</h3>
            </div>
            <div className='contButton'>
                <button>+</button>
                <p>2</p>
                <button>-</button>
            </div>
            <button className='btnAgregar'>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}
