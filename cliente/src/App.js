import React, { Component } from 'react';
import './App.css';
import IMGCITIES from './Cities.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ClickUsuario from './ClickBotonUsuario';
import All from './AllTheCities';
import Home from './Home';
import Nav from './nav';
class App extends Component  {
  render (){ return (
        <div >
    
          <Router>
          <div>

            <Switch>
          <Route path="/" exact component={Home}></Route>
         <Route path="/Cities" component={IMGCITIES}></Route>
         <Route path="/ClickBotonUsuario" component={ClickUsuario}></Route>
         <Route path="/AllTheCities" component={All}></Route>
         <Route path="/nav" component={Nav}></Route>
            

         </Switch>
          </div>

          </Router>



       
          


      </div>


    

        
        
      
      
 
    
     )
     
  
  }
  
  
 
}



export default App;














