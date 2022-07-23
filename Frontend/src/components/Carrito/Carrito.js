import React, { useContext, useState } from 'react'

import '../../Styles/Carrito/carrito.css'
import ItemProduct from './ItemProduct';
import Navegation from '../General/Navegation';

import CarritoContext from '../../Context/Carrito/CarritoContext'
import Succes from '../Pago/Succes';

export default function Carrito() {

    const [activeListProduct, setActiveLP] = useState(false);
    const [activeFactura, setActiveF] = useState(false);

    const [pagar, setPagar] = useState(false)

    const carritoContext = useContext(CarritoContext);
    const {listProduct, addProduct, updateProduct, deleteProduct} = carritoContext;

    const [total, setTotal] = useState(0);

    console.log(listProduct)

    const setTotalC = () => {

        const totalC = 0;
        if( listProduct.length > 0 ){
            listProduct.map(item => {
                totalC += item.cantidad * item.precio
            })
        }
        
        setTotal(totalC)
        
    }

    

  return (
    <div className='bodyCarrito'>
        <div>
            <Navegation/>
        </div>
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
                    {
                        listProduct
                        ? listProduct.length > 0
                            ? listProduct.map(dato => {
                                return <ItemProduct key={dato.id} dato={dato} updateProduct = {updateProduct} deleteProduct = {deleteProduct} />
                            })
                            : <></>
                        : <></>
                    }
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
                <div className='contDatos'>
                    {
                        listProduct
                        ? listProduct.length > 0
                            ? <>
                            {
                                listProduct.map(item => {
                                    return <div className='contItemPrecio' ><p>{item.id + ": "}</p><p className='subTotalLP'>
                                        {item.cantidad * item.precio}
                                    </p></div>
                                })
                            }
                            <div className='contTotal'>
                                <p>{"Total: " + total}</p>
                            </div>
                            </> 
                            : <></>
                        : <></>
                    }
                </div>
                <div className='contButton'>
                    <Succes dato = {listProduct[0]} />
                    {/*<button onClick={() => {
                        setPagar(!pagar)
                    }}>REALIZAR COMPRA</button>*/}
                </div>
            </div>
        </div>
    </div>
  )
}
