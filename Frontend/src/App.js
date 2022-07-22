import React from "react";
import '../src/Styles/App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import UserState from "./Context/Users/UserState";
import ProductState from './Context/Products/ProductState'

// Componentes
import Home from './components/Home/home'
import Perfil from './components/Perfil/Perfil'
import Login from './components/Sign Up - In/Login'
import Register from './components/Sign Up - In/Register'
import Carrito from "./components/Carrito/Carrito";
import ViewProduct from './components/Menu/ViewProduct'

function App() {
  return (
    <UserState>
      <ProductState>
        <Router> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Perfil' element={<Perfil/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/> 
            <Route path='/carrito' element={<Register/>}/> 
            <Route path='/menu/:id' element={<Register/>}/> 

            {/* 
            <Route path='/Menu' element={<Productos/>}/>
            <Route path='/SoporteCliente' element={<Soporte/>}/> 
            <Route path='/Carrito' element={<Carrito/>}/> 
            */}
          </Routes>
        </Router>
      </ProductState> 
    </UserState>
    
  );
}

export default App;
