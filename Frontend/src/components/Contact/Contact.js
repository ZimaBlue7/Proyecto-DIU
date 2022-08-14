import React from 'react'

import Navegation from '../General/Navegation'

import '../../Styles/Contact/contacto.css'

export default function Contact() {



  return (
    <div className='bodyContact'>
        <Navegation/>
        <div className='contFormContacto'>
            <h1>Contacto</h1>
            <div className='contInput'>
                <div className='inputLabel'>
                    <label>Nombre</label>
                    <input type='text' />
                </div>
                <div className='inputLabel'>
                    <label>Apellido</label>
                    <input type='text' />
                </div>
                <div className='inputLabel'>
                    <label>Telefono</label>
                    <input type='text' />
                </div>
                <div className='inputLabel'>
                    <label>Correo</label>
                    <input type='text' />
                </div>
                <div className='textareaLabel'>
                    <label>Mensaje</label>
                    <textarea></textarea>
                </div>
                
            </div>
        </div>
    </div>
  )
}
