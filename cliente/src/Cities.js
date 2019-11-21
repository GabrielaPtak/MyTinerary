
import React, { Component } from 'react';
import CitiesPage from './img/previous.png';
import './App.css';
import {Link} from 'react-router-dom';






class IMGCITIES extends Component  {
  render (){ return (
        <div className="Cities">

        <p>Find your perfect trip, designed by insiders who know and love their cities </p>

       <Link to="/AllTheCities">
        
        <img src={CitiesPage} className="App-CitiesPage" alt="CitiesPage"  /> 
        
        </Link>


       
      
      
    </div>
    
    
  )
  }
  

  
}
  




export default IMGCITIES;