import React, {useContext} from 'react';
import '../../Styles/Perfil/Perfil.css';
import imagenes from '../../Assets/imagenes.js'; 
import { useNavigate } from "react-router-dom";
import UserContext from '../../Context/Users/UserContext';

function NabvarP(props) {

  const userContext = useContext(UserContext)
  const {validarUsuario} = userContext
  const navigate = useNavigate();

  return (
    <section className="NavP"  >
              {/* Direciones e ingreso al perfil del usuario */}
              {/* <BarraNavegacion/> */}
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={imagenes.Logo} alt="Logo" className='Logo1' width="30" height="30"/>
        </a>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/Menu">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/SoporteCliente">Contacto</a>
          </li>
          
      </ul>
    </div>
    <div class="btn-group">
  <button  type="button" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={props.img ? props.img.url : 'https://i.postimg.cc/Y2dd6g6c/Im-genes-y-Memes-de-ONE-PIECE.jpg'} alt="Logo" id="imgPerfil" className='perfil' width="50" height="45"/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Ajustes</a></li>
    <li><a class="dropdown-item" href="#">Ayuda</a></li>
    <li><a class="dropdown-item" href="#">Preferencias</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><button onClick={ () => {
        window.localStorage.removeItem('sucur-salud-proyect-diu-login');
        validarUsuario("cargando");
        navigate('/')
      }
    } class="dropdown-item" href="/">Cerrar Sesion</button></li>
  </ul>
</div>
  </div>
  
</nav>
              
    </section>
  );
}

export default NabvarP;