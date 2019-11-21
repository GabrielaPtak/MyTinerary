import React, { Component } from 'react';
import './App.css';
import IMGCITIES from './Cities.js'
import HeaderLogo from './HeaderLogo.js'
import Slider from './slider.js'
import Logogeneral from './LogoGeneral.js'







class Home extends Component  {
  render (){ return (
        <div >
    
    

    <HeaderLogo></HeaderLogo>
    <Logogeneral></Logogeneral>

      

      <br></br>
     
     
        
        <IMGCITIES></IMGCITIES>

        <br></br>
        
        
       
        <Slider></Slider>

      


          

          



      </div>


    

        
        
      
      
 
    
     )
     
  
  }
  
  
 
}



export default Home;