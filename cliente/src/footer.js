import React, { Component } from 'react';
import './App.css';
import Footerimg from './img/homeIcon.png';
import {Link} from 'react-router-dom';




class FOOTER extends Component  {
  render (){ return (
        <div className="Footer">

<Link to="/">
<img src={Footerimg} className="App-Footer" alt="Footer"  /> 

</Link>
          
       






        </div>
     
     



      
      
      
    
    
  )
  }
  

  
}
  




export default FOOTER;