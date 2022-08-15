import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import UserContext from '../../Context/Users/UserContext';

// Styles
import '../../Styles/Dashboard/ContPages.css';

// Componentes
import Navegacion from './Navegacion';
import Home from './Home';
import SedeAdmin from './Admin/SedeAdmin';
import Sede from './Employee/Sede';
import NotFound from '../Dashboard/NotFound';

// Estados
import UserAdminState from '../../Context/UserAdmin/UserAdminState';
import UserPague from './UserPague';
import SedeState from '../../Context/Sede/SedeState';
import TaskAdmin from './Admin/TaskAdmin';

export default function ContPages() {

  const { subpage } = useParams();
  const navigate = useNavigate();
  
  const [actiMenu, setActiveMenu] = useState(true);

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
    else if( subpage === "pageusers" ){
      return <UserPague />
    }
    else if( subpage === "mantenimiento" ){
      return <NotFound/>
    }
    else if( subpage === "sedes" ){
      return <SedeAdmin/>
    }
    else if( subpage === "sede" ){
      return <Sede/>
    }
    else if( subpage === "tareas" ){
      return <TaskAdmin/>
    }
  }

  return <SedeState>
    <UserAdminState>
      <div className={actiMenu ? 'BodyDashboard active' : 'BodyDashboard'}>

        <Navegacion rol = {""} actiMenu = {actiMenu} actiToggle = {actiToggle} />

        <div className='contSuPages'>

          <div className='contHeader'>
            <p className='title'>
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
    </UserAdminState>
  </SedeState>
  
    
}
