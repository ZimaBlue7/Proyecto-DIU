import React, {useEffect, useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import images from '../../assets/imagenes.js'
import '../../Styles/Menu.css'
import Footer from "../Footer";
import NabvarH from "../NabvarH";

const Menu = () => {
  return (
    <div>
     <div>
      <NabvarH/>
    </div>
      <body className='bodyP'>
        <main>
    <section className='container'>
  <div class="row row-cols-1 row-cols-md-3">
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.gemiled} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5  class="card-title"><a className='name' href="">Gemiled</a></h5>
    <p class="card-text">$ 10.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.bloqueador} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Bloqueador</a></h5>
    <p class="card-text">$ 15.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.benet} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Benet</a></h5>
    <p class="card-text">$ 35.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.listerine} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Listerine</a></h5>
    <p class="card-text">$ 8.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.papel} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Papel Scott</a></h5>
    <p class="card-text">$ 2.300</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.pañales} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Pañales</a></h5>
    <p class="card-text">$ 15.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.pilas} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Pilas</a></h5>
    <p class="card-text">$ 11.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.raid} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Raid</a></h5>
    <p class="card-text">$ 9.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
  <div class="col">
  <div class="card" style={{width: "250px", height: "330px"}}>
    <img src={images.yodora} class="card-img-top" alt="..."/>
   <div class="card-body">
    <h5 class="card-title"><a className='name' href="">Yodora</a></h5>
    <p class="card-text">$ 13.000</p>
    <a href="#" class="btn btn-success">Agregar al carrito</a>
  </div>
    </div>
  </div>
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