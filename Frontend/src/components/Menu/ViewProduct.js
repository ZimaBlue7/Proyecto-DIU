import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import '../../Styles/Menu/viewProduct.css'
import imgTest from '../../Assets/farmacia.png'
import ProductContext from '../../Context/Products/ProductContext';
import Navegation from '../General/Navegation';
import CarritoContext from '../../Context/Carrito/CarritoContext';

export default function ViewProduct(props) {

    const navigate = useNavigate();
    const { idproduct } = useParams();
    const productContext = useContext(ProductContext);
    const {getProductUnd, product} = productContext;

    const carritoCpontxt = useContext(CarritoContext)
    const {addProduct} = carritoCpontxt;

    const [total, setTotal] = useState(1);

    useEffect(() => {
        if( idproduct ){
            getProductUnd(idproduct)
        }
    })

  return (
    <>
        <Navegation/>
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
            {
                product
                ?
                    <div className='contInfo'>
                        <div className='contText'>
                            <h1>{product.nombre}</h1>
                            <h4>Paquete x  1 ud</h4>
                            <h3>{"Precio: $"+product.precio}</h3>
                        </div>
                        <div className='contButton'>
                            <button onClick={() => {
                                setTotal(total+1)
                            }}>+</button>
                            <p>{total}</p>
                            <button onClick={() => {
                                setTotal(total-1)
                            }}>-</button>
                        </div>
                        <button onClick={() => {
                            addProduct(product)
                            navigate('/menu')
                            Swal.fire({
                                icon: 'success',
                                title: 'Agregado con exito',
                                showConfirmButton: false,
                                timer: 3000,
                            })
                        }} className='btnAgregar'>AGREGAR AL CARRITO</button>
                    </div>
                : <></>
            }
            
        </div>
    </>
    
  )
}
