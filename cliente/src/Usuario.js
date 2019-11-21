import React from 'react'
import Userimg from './img/user.png';
import {Link} from 'react-router-dom';
import Nav from './nav';



class User extends React.Component {
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
   

    
   <div className="menuUser">

      

   <div className="menuUserClick"  onClick={this.showMenu}>

   <img src={Userimg} className="Usuario" alt="Userimg" />


   </div>
   
   


{
     this.state.showMenu
       ? (
         <div className="Nav-links">
                    
 <Link to="/">

<li>Log In </li>

</Link>
<br></br>


      
<Link to="/AllTheCities">

<li>Create account</li>

</Link>


         </div>
       )
       : (
         null
       )
   }

<Nav></Nav>
 </div>
);
}
}
   

    

    
    
     
    

   
    








export default User;