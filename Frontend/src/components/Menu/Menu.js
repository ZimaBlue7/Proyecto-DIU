import React, {useEffect, useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import images from '../../Assets/imagenes.js'
import Swal from 'sweetalert2';
import defaultImg from '../../Assets/farmacia.png'
import '../../Styles/Menu/Menu.css'
import Footer from "../General/Footer";
import Navegation from '../General/Navegation.js';

import ProductContext from '../../Context/Products/ProductContext.js';
import CarritoContext from '../../Context/Carrito/CarritoContext.js';

const Menu = () => {

  const productContext = useContext(ProductContext);
  const {listProduct, getProduct} = productContext;

  const carritoContext = useContext(CarritoContext)
  const {addProduct} = carritoContext;

  useEffect(() => {
    getProduct()    
  }, [listProduct])

  const navigate = useNavigate();

  return <div className='bodyMenu'>
      <Navegation/>
      <h1>Productos</h1>
      <div className='contProduct'>
        {
          listProduct && listProduct.length > 0
            ? listProduct.map( item => {
              return <div className="cardProduct" key={item.id} >
                <img src={defaultImg} className="imgProduct" alt="..." onClick={() => {
                  navigate('/menu/'+item.id)
                }}/>
                <div className="cardBody"> 
                  <h4 className="cardTitle" onClick={() => {
                    navigate('/menu/'+item.id)
                  }}>{item.nombre}</h4>
                  <p className="cardText" onClick={() => {
                    navigate('/menu/'+item.id)
                  }}>{'$'+item.precio}</p>
                  <button onClick={() => {
                    console.log(item)
                    addProduct(item)
                    Swal.fire({
                      icon: 'success',
                      title: 'Agregado con exito',
                      showConfirmButton: false,
                      timer: 3000,
                    })
                  }} className="btn btn-success">Agregar al carrito</button>
                </div>
              </div>
            } )
            : <> </>
        }
      </div>
    </div>
}

export default Menu