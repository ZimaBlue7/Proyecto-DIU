import React, {useState,useContext,useEffect} from 'react'
import Swal from 'sweetalert2';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../../Styles/Sign Up - In/Login.css';
import { createContext } from "react";

import UserContext from '../../Context/Users/UserContext';

const Login = () => {
    
    const userContext = useContext(UserContext);
    const { validarUsuario, datosUser } = userContext;

  const navigate = useNavigate();
  const [body, setBody] = useState({ email: '', password: '' })
  
  const handleChange = (e) => {
    setBody({...body,[e.target.name]: e.target.value});
  }

  const handleSubmit = (e) =>{

    e.preventDefault();
    try{

        validarUsuario(body); 
        console.log(body)
        /*if( datosUser ){
 
            Swal.fire({
                title: 'Verificando informacion',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            }).then(() => {

                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido a SucurSalud '+ datosUser.nombre,
                    showConfirmButton: false,
                    timer: 3000,
                }).then(function() {
                    navigate("/");
                });      
            })
              
        }
        else{
            Swal.fire({
                  title: 'Verificando informacion',
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: () => {
                      Swal.showLoading()
                  }
              }).then(() => {
                  Swal.fire({
                      icon: 'error',
                      title: 'No estás registrado',
                      showConfirmButton: false,
                      timer: 2000,
                });
            })
              
        }*/
            
    }catch(e){
        console.log(e)
    }      
};

    return (
        <div>
             <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet"></link>
   <body className='body'>
   <header className="header">
       
    </header>
    <main>

        
    <section className="Login">
   
    <section className="Login__container">
    <h2 className="login">Inicia sesion</h2>
       <div className="profile icon"></div>
       <div className="profile icon2"></div>
       <div className="arrow-right icon"></div>
       <div className="mail icon"></div>
       <div className="key2 icon"></div>
       <form className="Login__container--form" onSubmit={handleSubmit}>
            <input name='email'  onChange={handleChange} className="input" type="email" placeholder="Correo" required></input>
            <input name='password_'  onChange={handleChange} className="input" type="password" placeholder="Contraseña" required></input>
            <button className="button">Iniciar sesion</button>
       </form>
       

    </section>
    <section className="Registrate">
        <a>¿No tienes cuenta?</a>
        <button className="button-register"><a href='/register'>Registrarme</a></button>
    </section>
    </section>
    </main>
   </body>

        </div>
    )
}

export default Login
