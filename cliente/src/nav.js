import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import MenuP from './MenuArriba';




class Nav extends Component  {

  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render (){ return (

    <div className="menu">

      

        <div onClick={this.showMenu}>

        <MenuP></MenuP>


        </div>
        
        


  {
          this.state.showMenu
            ? (
              <div className="Nav-links">
                         
      <Link to="/">

<li>Home</li>

  </Link>
  <br></br>
  

           
  <Link to="/AllTheCities">

<li>Cities</li>

  </Link>
  <br></br>
 

           
  <Link to="/AllTheCities">

<li>My tinerary</li>

  </Link>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}







   



export default Nav;



