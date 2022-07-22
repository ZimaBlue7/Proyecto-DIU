import React, { Fragment } from 'react'
import Container from "@mui/material/Container";
import '../../Styles/Perfil/Perfil.css';
import imagenes from '../../Assets/imagenes.js'; 
import Footer from "../General/Footer";
import NabvarP from '../General/NabvarP';


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