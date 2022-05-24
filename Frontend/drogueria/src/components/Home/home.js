import React, { Component, useState, useContext, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import '../../Styles/home.css';
import Container from "@mui/material/Container";

export default function home(){ 
    
    return (
          <Container className="body">

            <section className="barraArriba">
              {/* Direciones e ingreso al perfil del usuario */}
            </section>

            <section className="Imagen1">

            </section>

            <section className='cuadro'> 
            {/* Cuatro secciones (ultimos productos, productos,acerca de..) */}
            </section>

          </Container>
        );
      
}

