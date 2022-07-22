import React, { Fragment } from 'react'
import Container from "@mui/material/Container";
import '../../Styles/Perfil/Perfil.css';
import imagenes from '../../assets/imagenes.js'; 
import Footer from "../Footer";
import NabvarP from '../NabvarP';


const Perfil1 = () => {
  return (
    <Container>
  
      <div>
        <NabvarP/>
      </div>

    <section className="cuadro">

    <div class="row justify-content-center">
    <div class="col-4">
    <div className='cuadroimg'>
    <img src={imagenes.photomale} className="rounded float-start" alt="PerfilPordefecto" width="375" height="375" /> 
    {/* Añadir propiedades para poder cambiar la imagen */}
    </div>
    </div>
    <div class="px-5 col-4">
    <form class="py-5 row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nombre</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Nombre" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label ">Apellido</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Apellido"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Correo</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="nombre@gmail.com"/>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Cambiar foto de perfil</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Guardar cambios</button>
  </div>
</form>
    </div>
  </div>

  </section>
    
   
  
  <section className='futer'>
      <Footer/>
  </section>
  
  </Container>
    
    )
}

export default Perfil1

/* 




    <div class="row g-3">
  <div class="col-sm-4">
  </div>
  <div class="py-4 ps-4 col-sm">
    <input type="text" class="form-control" placeholder="State" aria-label="State"/>
  </div>
  <div class="py-4 pe-4 col-sm">
    <input type="text" class="form-control" placeholder="Zip" aria-label="Zip"/>
  </div>
  <div class="py-4 pe-4 row-sm">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
</div>

*/