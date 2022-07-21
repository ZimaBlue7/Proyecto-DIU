import React, { Component, useState, useContext, useEffect } from "react";

import Container from "@mui/material/Container";

import '../../Styles/Home/home.css';
import imagenes from '../../Assets/imagenes'; 

import Footer from "../General/Footer";


export default function home(){ 
    
  return (
    <Container >
      <section className="barraArriba"  >
              {/* Direciones e ingreso al perfil del usuario */}
              {/* <BarraNavegacion/> */}
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={imagenes.Logo} alt="Logo" className='Logo1' width="30" height="24"/>
        </a>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Contacto</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Atencion al cliente</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <form class="container-fluid justify-content-end">
    <button class="btn btn-outline-primary me-1" type="button">Registrarse </button>
    <button class="btn btn-outline-success me-2" type="button">Iniciar Sesion </button>
  </form>
</nav>
              
            </section>

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
      <img src={imagenes.carrusel} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={imagenes.carrusel} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imagenes.carrusel} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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
              <h1>Ultimos productos agregados <span class="badge bg-secondary">!!</span>
              </h1>
              </div>

            <section className='cuadro2'> 
            a
            </section>

            <section>
              {/* Productos podria ser tambien el carrusel pero con los ultimos productos agregados */}
            </section>

            <section className='futer'>
              <Footer/>
            </section>

            {/* <Footer/> */}
          </Container>
        );
      
}

