import React, { Component, useState, useContext, useEffect } from "react";

import Container from "@mui/material/Container";

import '../../Styles/Home/home.css';
import imagenes from '../../Assets/imagenes'; 

import Footer from "../General/Footer";
import NabvarH from "../General/NabvarH";

import Navegation from "../General/Navegation";

import ProductContext from '../../Context/Products/ProductContext.js';

export default function home(){ 

  const productContext = useContext(ProductContext);
  const {listProduct, getProduct} = productContext;

  useEffect(() => {
    getProduct()    
  }, [])
    
  return (
  <Container >
    <div>
      <Navegation/>
    </div>

    <div className="imagenP"> 
      <img src={imagenes.img1} className="imagen1" alt="ImagenInicio"/> 
    </div>
              
    <div class="d-flex justify-content-evenly">
      <h1>Nuevas Ofertas <span class="badge bg-secondary">New</span>
      </h1>
    </div>       

    <section className='cuadro'> 
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={imagenes.papel} class="d-block w-100" alt="..."  width="375" height="375"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Papel Scott</h5>
                <p>Ingresa a el apartado de productos para conocer más</p>
            </div>
        </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={imagenes.pañales} class="d-block w-100" alt="..."  width="375" height="375" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Pañales</h5>
            <p>Some Ingresa a el apartado de productos para conocer más</p>
          </div>
      </div>
      <div class="carousel-item">
        <img src={imagenes.yodora} class="d-block w-100" alt="..."  width="375" height="375" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Yodora</h5>
            <p>Ingresa a el apartado de productos para conocer más</p>
          </div>
      </div>
      </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>

    </section>
      <div class="d-flex justify-content-evenly">
        <h1>Ultimos productos agregados <span class="badge bg-secondary">!!</span></h1>
      </div>

    <section className='cuadro2'> 
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={imagenes.listerine} class="d-block w-100" alt="..."  width="375" height="375" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-dark" >Listerine</h5>
        <p class="text-dark" >Ingresa al apartado de productos para conocer más.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={imagenes.raid} class="d-block w-100" alt="..."  width="375" height="375" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-dark" >Raid</h5>
        <p class="text-dark" >Ingresa al apartado de productos para conocer más.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={imagenes.benet  } class="d-block w-100" alt="..."  width="375" height="375" />
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-dark">BenetCalcio</h5>
        <p class="text-dark" >Ingresa al apartado de productos para conocer más.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    </section>

    <section className='futer'>
      <Footer/> 
    </section>

  </Container>
  );
      
}