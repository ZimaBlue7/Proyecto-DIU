import React from "react";
import './Styles/App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

// Componentes
import Home from './components/Home/home'
import ViewProduct from "./components/Menu/ViewProduct";
import Perfil from './components/Perfil/Perfil'
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    
    <Router> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu/:id' element={<ViewProduct/>}/>
        <Route path='/perfil' element={<Perfil/>}/>        
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
