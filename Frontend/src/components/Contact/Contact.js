import React from 'react'
import Swal from 'sweetalert2';

import Navegation from '../General/Navegation'

import '../../Styles/Contact/contacto.css'

export default function Contact() {



  return (
    <div className='bodyContact'>
        <Navegation/>
        <h1>Contacto</h1>
        <div className='contFormContacto'>
            <div className='contOtrosMedios'>
                <div className='RedesSociales'>
                    <h5>Nuestras redes</h5>
                    <div className='contRedesS'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-whatsapp"></ion-icon>  
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </div>
                <div className='Correos'>
                    <h5>Nuestros correos</h5>
                    <div className='contEmails'>
                        <div className='itemEmail'>
                            <ion-icon name="mail-outline"></ion-icon>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className='Telefonos'>
                    <h5>Telefonos</h5>
                    <div className='contTelefonosTienda'>
                        <div className='itemPhone'>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                            <p></p>
                        </div>
                        <div className='itemPhone'>
                            <ion-icon name="call-outline"></ion-icon>
                            <p></p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='contFormBtn'>
                <div className='contInput'>
                    <div className='inputLabel'>
                        <label>Nombre*</label>
                        <input type='text' placeholder='Nombre' required />
                    </div>
                    <div className='inputLabel'>
                        <label>Apellido*</label>
                        <input type='text' placeholder='Apellido' required />
                    </div>
                    <div className='inputLabel'>
                        <label>Telefono</label>
                        <input type='phone' placeholder='Telefono' />
                    </div>
                    <div className='inputLabel'>
                        <label>Correo*</label>
                        <input type='email' placeholder='Email' required />
                    </div>
                    <div className='selectLabel'>
                        <label>Motivo*</label>
                        <select required>
                            <option>Selecionar</option>
                            <option>Reclamo</option>
                            <option>Sugerencia</option>
                            <option>Inquietud</option>
                            <option>Queja</option>
                            <option>Inconformida</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div className='textareaLabel'>
                        <label>Mensaje*</label>
                        <textarea placeholder='Mensaje' required></textarea>
                    </div>
                    
                </div>
                <div className='contBtn'>
                    <button onClick={() => {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oops...',
                            text: 'El boton no se encuentra habilitado',
                        })
                    }}>
                        Enviar
                    </button>
                </div> 
            </div>
            
        </div>
    </div>
  )
}
