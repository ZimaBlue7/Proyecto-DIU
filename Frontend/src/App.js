import React from "react";
import '../src/Styles/App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import UserState from "./Context/Users/UserState";
import ProductState from './Context/Products/ProductState';
import CarritoState from './Context/Carrito/CarritoState'
import StoreState from './Context/Store/StoreState'

// Componentes
import Home from './components/Home/home'
import Perfil from './components/Perfil/Perfil'
import Login from './components/Sign Up - In/Login'
import Register from './components/Sign Up - In/Register'
import Carrito from "./components/Carrito/Carrito";
import ViewProduct from './components/Menu/ViewProduct'
import Menu from "./components/Menu/Menu";
import NotFound from "./components/General/NotFound";
import Succes from './components/Pago/Succes'
import HomeAdmin from './components/Dashboard/ContPages';
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <UserState>
      <ProductState>
        <CarritoState>
          <StoreState>
            <Router> 
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Perfil' element={<Perfil/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/> 
                <Route path='/carrito' element={<Carrito/>}/>    
                <Route path='/sobrenosotros' element={<AboutUs/>}/>         
                <Route path='/contacto' element={<Contact/>}/> 
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/menu/:idproduct' element={<ViewProduct/>}/> 
                <Route path='/notfound' element={<NotFound/>}/> 
                <Route path='/pago' element={<Succes/>}/> 
                <Route path='/admin/' element={<HomeAdmin/>}/>
                <Route path='/admin/:subpage' element={<HomeAdmin/>}/>
              </Routes>
            </Router>
          </StoreState>
        </CarritoState>
      </ProductState> 
    </UserState>
    
  );
}

export default App;
