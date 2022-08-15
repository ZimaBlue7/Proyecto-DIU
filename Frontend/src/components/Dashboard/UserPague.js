import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/Users/UserContext'
import UserAdminContext from '../../Context/UserAdmin/UserAdminContext'
import Swal from 'sweetalert2';

import '../../Styles/Dashboard/userPage.css'
import '../../Styles/Dashboard/modalAddUser.css'

export default function UserPague() {

    const userContext = useContext(UserContext);
    const {datosUser} = userContext;

    const userAdminContext = useContext(UserAdminContext);
    const {getUsers, datos} = userAdminContext;

    const [totalEmployee, setTotalEmployee] = useState(0);
    const [addUserActive, setAddUsetActive] = useState(false);
    const [rol, setRol] = useState()


    useEffect(() => {
        getUsers();
        if(datos && datos.length > 0){
            let total = datos.filter( datos => datos.rol === 'employee' );
            setTotalEmployee(total.length);
        }
    })

    const activeModal = () => {
        setAddUsetActive(!addUserActive)
    }

  return (
    <div className='bodyUserAdmin'>
        {
            datosUser 
            ? datosUser.rol === 'admin'
                ? <div className='contReusumenDatos'>
                    <div className='contUsers'>
                        <p>{ datos && datos.length > 0 ? datos.length + ' Usuarios' : '0 Usuarios'}</p>
                        <ion-icon name="people-circle-outline"></ion-icon>
                    </div>
                    <div className='conEmployee'>
                        <p>{ totalEmployee + ' Empleados'}</p>
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </div>
                  </div>
                : <></>
            : <></>
        }

        <div className='contTableListUser'>
            <div className='itemListUser header'>
                <p className='itemId'>ID</p>
                <p className='itemIcon'>Icono</p>
                <p className='itemNombre'>Nombre</p>
                <p className='itemCorreo'>Correo</p>
                <p className='itemRol'>Rol</p>
                <p className='itemAccion'>Accion</p>
            </div>
            {
                datos && datos.length > 0
                ? datos.map( user => {
                    return <div className='itemListUser'>
                        <p className='itemId'>{user.id}</p>
                        <div className='itemIcon'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png' alt='' />
                        </div>
                        <p className='itemNombre'>{user.nombre + ' ' + user.apellido}</p>
                        <p className='itemCorreo'>{user.correo}</p>
                        <p className='itemRol'>{user.rol}</p>
                        <div className='contBottones itemAccion'>
                            <button className='btnEdit' onClick={() => {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Oops...',
                                    text: 'El boton no se encuentra habilitado',
                                })
                            }}>
                                <ion-icon name="create-outline"></ion-icon>
                            </button>
                            {
                                datosUser 
                                ? datosUser.rol === 'admin'
                                    ?<button className='btnDelete' onClick={() => {
                                        Swal.fire({
                                            icon: 'warning',
                                            title: 'Oops...',
                                            text: 'El boton no se encuentra habilitado',
                                        })
                                    }}>
                                        <ion-icon name="trash-outline"></ion-icon>
                                     </button>
                                    : <></>
                                : <></>
                            }
                            
                        </div>
                    </div>
                } )
                : <></>
            }
        </div>
        
        {
          datosUser 
          ? datosUser.rol === 'admin'
              ? <div className='contBtnFlotanteUser'>
                    <button className='btnFlotante' onClick={() => {
                        Swal.fire({
                                title: '¿Que tipo de usuario deseas agregar?',
                                showDenyButton: true,
                                confirmButtonText: 'Cliente',
                                denyButtonText: `Empleado`,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setRol('cliente')
                                } else if (result.isDenied) {
                                    setRol('empleado')
                                }
                            })
                        activeModal()
                    }}>
                        Agregar
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                </div>
              : <></>
          : <></>  
        }

        <ModalAddUser active = {addUserActive} activeModal = {activeModal} rol = {rol} />

    </div>
  )
}


function ModalAddUser(props) {

    const [datos, setDatos] = useState()


    return <div className={ props.active ? 'containerModal active' : 'containerModal'}>
        <div className='Modal'>
            <h2>Ingresar datos</h2>
            <input type='text' placeholder='Nombre' required />
            <input type='text' placeholder='Apellido' required />
            <input type='email' placeholder='Correo' required />
            <input type='phone' placeholder='Telefono' required />
            <input type='text' placeholder='Fecha de Nacimiento' required />
            <input type='password' placeholder='Contraseña' required />
            {
                props.rol 
                ? props.rol === 'empleado'
                    ? <>
                        <input type='test' placeholder='Cargo' />
                        <select>
                            <option>Sede 1</option>
                            <option>Sede 2</option>
                            <option>Sede 3</option>
                            <option>Sede 4</option>
                            <option>Sede 5</option>
                        </select>
                    </> 
                    : <></>
                : <></>
            }
            
            <div className='contbtn'>
                <button className='btnCancelar' onClick={() => {
                    props.activeModal()
                }}>
                    Cancelar
                </button>
                <button className='btnAgregarAdmin' onClick={() => {
                    console.log(datos)
                    props.activeModal()
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'Por el momento no es posible agregar al usuario',
                    })
                }}>
                    Agregar
                </button>
            </div>
        </div>
    </div>
}