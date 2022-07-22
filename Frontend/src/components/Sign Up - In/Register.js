import React, {useEffect, useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../Styles/Sign Up - In/Register.css';
import { createContext } from "react";
const Register = () => {

   

    const navigate = useNavigate();
    
    const [register, setRegister] = useState({
        nombre:'',
        lastName:'',
        email:'',
        password_:''
    })

    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
   const res =   await  fetch('http://localhost:5000/signUp', {
            method: 'POST',
            body:JSON.stringify(register),
            headers: {'Content-Type': 'application/json' }
        })
        const data = await res.json()
        console.log(data)

        Swal.fire({
            icon: 'success',
            title: 'Usuario Creado Con exito',
            showConfirmButton: false,
            timer: 3000,
        }).then(function() {
            navigate("/login");
        });
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
            <input name='lastName'  onChange={handleChange} className="input" type="text" placeholder="Apellido" required></input>
            <input name='email'  onChange={handleChange} className="input" type="email" placeholder="Correo" required></input>
            <input name='password_'  onChange={handleChange} className="input" type="password" placeholder="Contraseña" required></input>
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
