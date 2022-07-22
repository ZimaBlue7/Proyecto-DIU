import React, {useEffect, useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../Styles/Sign Up - In/Register.css';
import { createContext } from "react";

import UserContext from '../../Context/Users/UserContext';

const Register = () => {

    const userContext = useContext(UserContext);
    const { registrarUsuario, datosUser } = userContext;

    const navigate = useNavigate();
    const [register, setRegister] = useState({
        nombre:'',
        apellido:'',
        correo:'',
        password:'',
        fecha_nacimiento:"",
        telefono:""
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        registrarUsuario(register)
        //console.log(register)

        /*if( datosUser ){
            Swal.fire({
                icon: 'success',
                title: 'Usuario Creado Con exito',
                showConfirmButton: false,
                timer: 3000,
            }).then(function() {
                navigate("/");
            });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'El usuario no fue creado',
                showConfirmButton: false,
                timer: 3000,
            })
        }*/
                
    };

    const handleChange = (e) =>{
        setRegister({...register,[e.target.name]: e.target.value});
    }

    return (
        <div>
             <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet"></link>
   <body className='body'>
   <header className="header">
       
    </header>
    <main>

        
    <section className="Register">
    <section className="Inicia-sesion">
        <a >¿Ya tienes cuenta?</a>
        <button className='Button-inicia'><a href='/login'>Iniciar sesion</a></button>
    </section>
    <section className="Register__container">
    <h2 className="regis">Registrate</h2>
       <div className="profile icon"></div>
       <div className="profile icon2"></div>
       <div className="arrow-right icon"></div>
       <div className="mail icon"></div>
       <div className="key2 icon"></div>
       <form className="Register__container--form" onSubmit={handleSubmit}>
       <input name='nombre' onChange={handleChange}  className="input" type="text" placeholder="Nombre" required></input>
            <input name='apellido'  onChange={handleChange} className="input" type="text" placeholder="Apellido" required></input>
            <input name='correo'  onChange={handleChange} className="input" type="correo" placeholder="Correo" required></input>
            <input name='password'  onChange={handleChange} className="input" type="password" placeholder="Contraseña" required></input>
            <button className="button">Registrarme</button>
       </form>
       

    </section>
    </section>
    </main>
   </body>

    </div>
    )
}

export default Register
