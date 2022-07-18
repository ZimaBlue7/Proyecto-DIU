import React from "react";
import '../src/Styles/App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

// Componentes
import Home from './components/Home/home'
import Perfil from './components/Perfil/Perfil'

function App() {
  return (
    
    <Router> 
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Perfil' element={<Perfil/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
