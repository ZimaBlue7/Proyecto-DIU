import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import UserContext from '../../Context/Users/UserContext';

// Styles
import '../../Styles/Dashboard/ContPages.css';

// Componentes
import Navegacion from './Navegacion';
import Home from './Home'

export default function ContPages() {

  const { subpage } = useParams();
  const navigate = useNavigate();
  
  const [actiMenu, setActiveMenu] = useState(true);

  const userContext = useContext(UserContext);
  const {datosUser, validarUsuario} = userContext;

  const actiToggle = () => {
    setActiveMenu(!actiMenu);
  }

  const subPages = () => {
    if( subpage === null || subpage === "" || !subpage ){
      return <Home/>
    }
    else if( subpage === "home" ) {
      return <Home/>
    }

  }

  return (
    <div className={actiMenu ? 'BodyDashboard active' : 'BodyDashboard'}>

      <Navegacion rol = {""} actiMenu = {actiMenu} actiToggle = {actiToggle} />

      <div className='contSuPages'>

        <div className='contHeader'>
          <p className='title'>
            TITULO
          </p>
          <div className='contBtns'>
            <button className='colorFondo'><ion-icon name="moon-outline"></ion-icon></button>
            <button className='iconPerfil'>
              <img src='https://i.postimg.cc/Y2dd6g6c/Im-genes-y-Memes-de-ONE-PIECE.jpg' alt='' />
            </button>
          </div>
        </div>

        <div className='pages'>
          {subPages()}
        </div>
        
      </div>
      
    </div>
  )
}
