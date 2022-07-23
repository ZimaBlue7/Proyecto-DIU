import React, {useEffect, useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import images from '../../Assets/imagenes.js'
import Swal from 'sweetalert2';
import defaultImg from '../../Assets/farmacia.png'
import '../../Styles/Menu.css'
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
  }, [])

  return (
    <div>
     <div>
      <Navegation/>
    </div>
      <body className='bodyP'>
        <main>
    <section className='container'>
  <div class="row row-cols-1 row-cols-md-3">
    {
      listProduct
      ? listProduct.map( item => {
        return <div class="col">
          <div class="card" style={{width: "250px", height: "330px"}}>
            <img src={defaultImg} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5  class="card-title"><a className='name' href="">{item.nombre}</a></h5>
              <p class="card-text">{item.precio}</p>
              <button onClick={() => {
                console.log(item)
                addProduct(item)
                Swal.fire({
                  icon: 'success',
                  title: 'Agregado con exito',
                  showConfirmButton: false,
                  timer: 3000,
                })
              }} class="btn btn-success">Agregar al carrito</button>
            </div>
          </div>
        </div>
      } )
      : ''
    }
</div>
</section>
    </main>
    </body>
    <section className='futer'>
      <Footer/> 
    </section>
    </div>
  )
}

export default Menu