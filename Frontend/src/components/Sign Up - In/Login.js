import React, {useState,useContext,useEffect} from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import '../../Styles/Sign Up - In/Login.css';
import { createContext } from "react";

import UserContext from '../../Context/Users/UserContext';

const Login = (props) => {
    
    const userContext = useContext(UserContext);
    const { validarUsuario, datosUser } = userContext;

    const navigate = useNavigate();
    const [body, setBody] = useState({ email: '', password: '' })

    useEffect(() => {

        const elem = window.localStorage.getItem('sucur-salud-proyect-diu-login')
        const dato = elem ? JSON.parse(elem) : null

        if( dato ){
            validarUsuario(dato);
            navigate('/')
        }        
        
    }, [])
  
    const handleChange = (e) => {
        setBody({...body,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        try{

            validarUsuario(body);
            let timerInterval
            Swal.fire({
                title: 'Validando',
                html: 'I will close in <b></b> milliseconds.',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const b = Swal.getHtmlContainer().querySelector('b')
                  timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
            }).then((result) => {
                console.log(datosUser)
                if( datosUser !== 'cargando' || datosUser ){
                    Swal.fire({
                        icon: 'success',
                        title: 'Bienvenido a' + datosUser.nombre,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
            })

        }catch(e){
            console.log(e)
        }      
    };

    return (
        <div className='bodyLogin'>

            <div className='contLoginDial'>
                <section className="contForm">

                    <h2 className="titleLogin">Inicia sesion</h2>

                    <div className="formLogin">

                        <div className='contInput'>
                            <ion-icon name="person-outline"></ion-icon>
                            <input name='email'  onChange={handleChange} type="email" placeholder="Correo" required></input>
                        </div>
                        <div className='contInput'>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input name='password'  onChange={handleChange} type="password" placeholder="Contraseña" required></input>
                        </div>
                        
                    </div>

                    <button onClick={handleSubmit} className="btnIniciarSesion">INICIAR SESION</button>
                    
                </section>

                <section className="Registrate">
                    <p>¿No tienes cuenta?</p>
                    <button onClick={() => {
                        navigate('/register')
                    }} className="button-register">REGISTRARME</button>
                </section>
            </div>
            
            
        </div>
    )
}

export default Login
