import React, { Component } from 'react';
import logo from './img/MYtineraryLogo.png';
import './App.css';







class LogoGeneral extends Component  {
  render (){ return (
        <div className="Applogo">
         
        
         
      <div className="App-header">
        <a href="mailto:elcorreoquequieres@correo.com">
        <img src={logo} className="App-logo" alt="logo" /> </a>
      </div>
     
        
      
      </div>
 
    
     )
     
  
  }
  
  
 
}

export default LogoGeneral;