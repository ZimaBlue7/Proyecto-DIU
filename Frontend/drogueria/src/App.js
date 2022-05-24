import React from "react";
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

// Componentes
import Home from './components/Home/home'

function App() {
  return (
    
    <Router> 
    <Routes>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
