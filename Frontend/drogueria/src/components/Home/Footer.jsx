import React from 'react';
import '../../Styles/Footer.css';

function Footer() {
  return (
    <div>
   <footer>
        
        <ul class="footer-left">
            
            <li>
                <a>Publicidad</a>
            </li>
            <li>
                <a>Negocios</a>
            </li>
            <li>
                <a>Cómo funciona la Búsqueda</a>
            </li>
        </ul>
        <ul class="footer-center">
            <li>
                <a>Centro 1</a>
            </li>
            <li>
                <a >Centro 1</a>
            </li>
            <li>
                <a >Centro 1</a>
            </li>
        </ul>
        <ul class="footer-right">
            <li>
                <a >Privacidad</a>
            </li>
            <li>
                <a >Condiciones</a>
            </li>
            <li>
                <a >Preferencias</a>
            </li>
        </ul>
    </footer>
    </div>
  );
}

export default Footer;