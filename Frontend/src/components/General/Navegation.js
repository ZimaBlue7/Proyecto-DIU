import React, { useContext, useEffect } from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import  '../../Styles/General/navegacion.css'
import logo from '../../Assets/img/LogoSucur.png';

import UserContext from '../../Context/Users/UserContext';

export default function Navegation() {

    const userContext = useContext(UserContext);
    const {datosUser, verificarLogin} = userContext;

    useEffect(() => {

        const elem = window.localStorage.getItem('sucur-salud-proyect-diu-login')
        const dato = elem ? JSON.parse(elem) : null

        if( dato ){
            verificarLogin(dato);
        }        
        
    }, [])

    const navigate = useNavigate();

  return (
    <div className='bodyNavegacion'>
        <div className='contNavegacion'>
            <Link to="/" >
                <img src={logo} alt='' className='logo'></img>
            </Link>
            <div className='contLink'>
                {
                    datosUser
                    ?
                        datosUser === "cargando" || datosUser === "error"
                        ?
                        <>
                            <ul>
                                <li>
                                    <Link className='link' to='/sobrenosotros'>
                                        Nosotros
                                    </Link>
                                </li>       
                                <li>
                                    <Link className='link' to='/contacto'>
                                        Contacto
                                    </Link>
                                </li>    
                                <li>
                                    <Link className='link' to='/menu'>
                                        Productos
                                    </Link>
                                </li>       
                            </ul>
                            <div className='contBtnRegLo'>
                                <button onClick={() => {
                                    navigate('/login')
                                }} className='btnLogin'>Iniciar Sesion</button>
                                <button onClick={() => {
                                    navigate('/register')
                                }} className='btnRegister'>Registrarme</button>
                            </div>
                        </>
                            
                        :
                        <>
                            <ul>
                                {console.log(datosUser)}
                                {
                                    datosUser.rol === "admin" || datosUser.rol === "employee" 
                                    ? <li>
                                        <Link className='link' to='/admin'>
                                            Administracion
                                        </Link>
                                    </li>  
                                    : <></>
                                }
                                <li>
                                    <Link className='link' to='/sobrenosotros'>
                                        Nosotros
                                    </Link>
                                </li>       
                                <li>
                                    <Link className='link' to='/contacto'>
                                        Contacto
                                    </Link>
                                </li>    
                                <li>
                                    <Link className='link' to='/menu'>
                                        Productos
                                    </Link>
                                </li>             
                                <li>
                                    <Link className='link' to='/carrito'>
                                        <ion-icon name="cart-outline"></ion-icon>
                                    </Link>
                                </li>
                            </ul>
                            <Link className='link' to='/perfil'>
                                <div className='contAvatar'>
                                    <img src='https://i.postimg.cc/Y2dd6g6c/Im-genes-y-Memes-de-ONE-PIECE.jpg' alt=''></img>
                                </div>  
                            </Link>
                                                  
                        </>
                    : <>
                    
                        <ul>
                            <li>
                                <Link className='link' to='/sobrenosotros'>
                                    Nosotros
                                </Link>
                            </li>       
                            <li>
                                <Link className='link' to='/contacto'>
                                    Contacto
                                </Link>
                            </li>    
                            <li>
                                <Link className='link' to='/menu'>
                                    Productos
                                </Link>
                            </li>       
                        </ul>
                        <div className='contBtnRegLo'>
                            <button onClick={() => {
                                    navigate('/login')
                                }} className='btnLogin'>Iniciar Sesion</button>
                            <button onClick={() => {
                                    navigate('/register')
                                }} className='btnRegister'>Registrarme</button>
                        </div>
                    
                    </> 
                }
            </div>
            
        </div>

    </div>
  )
}
