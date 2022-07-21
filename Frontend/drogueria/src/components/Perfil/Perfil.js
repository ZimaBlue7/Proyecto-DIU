import React, { Fragment } from 'react'
import Container from "@mui/material/Container";
import '../../Styles/Perfil/Perfil.css';
import imagenes from '../../assets/imagenes.js'; 
import Footer from "../Footer";
import NabvarP from '../NabvarP';


const Perfil = () => {
  return (
    <Container>

      <div>
        <NabvarP/>
      </div>

    <section className="cuadro">

    </section>

    <section className='futer'>
        <Footer/>
    </section>

    </Container>
  )
}

export default Perfil