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
        fecha_nacimiento:"01-01-0001",
        telefono:""
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();

        registrarUsuario(register);
        let timerInterval
        Swal.fire({
            title: 'Registrado Usuario',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
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
            if( datosUser !== 'cargando' || datosUser ){
                navigate('/login')
            }
        })
        
    };

    const handleChange = (e) =>{
        setRegister({...register, [e.target.name]: e.target.value});
    }

    return (
        <div className='bodyRegister'>

            <div className='contRegisterDial'>

                <section className="contForm">

                    <h2 className="titleRegister">Registrate</h2>

                    <div className="formRegister">
                        <div className='contInput'>
                            <ion-icon name="text-outline"></ion-icon>
                            <input name='nombre' onChange={handleChange}  type="text" placeholder="Nombre" required></input>
                        </div>
                        <div className='contInput'>
                            <ion-icon name="text-outline"></ion-icon>
                            <input name='apellido'  onChange={handleChange} type="text" placeholder="Apellido" required></input>
                        </div>
                        <div className='contInput'>
                            <ion-icon name="call-outline"></ion-icon>
                            <input name='telefono'  onChange={handleChange} type="phone" placeholder="Telefono" required></input>
                        </div>
                        <div className='contInput'>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input name='correo'  onChange={handleChange} type="correo" placeholder="Correo" required></input>
                        </div>
                        <div className='contInput'>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input name='password'  onChange={handleChange} type="password" placeholder="Contraseña" required></input>
                        </div>
                    </div>

                    <button onClick={handleSubmit} className="btnRegister">REGISTRARME</button>
            
                </section>

                <section className="Inicia-sesion">
                    <p>¿Ya tienes cuenta?</p>
                    <button onClick={() => {
                        navigate('/login')
                    }} className='Button-inicia'>INICIAR SESION</button>
                </section>

            </div>

    </div>
    )
}

export default Register
