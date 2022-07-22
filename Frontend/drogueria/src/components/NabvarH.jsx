import React from 'react';
import '../Styles/Home/home.css';
import imagenes from '../assets/imagenes.js'; 
import {BrowserRouter as Router,Link} from "react-router-dom";

function NabvarH() {
  return (
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
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/Menu">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/SoporteCliente">Contacto</a>
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
    <a href="/Register"><button class="btn btn-outline-primary me-1" type="button">Registrarse </button> </a>
    <a href="/Login"><button class="btn btn-outline-success me-2" type="button">Iniciar Sesion </button></a>
    
    
  </form>
</nav>
</section>
  );
}

export default NabvarH;