import React, { Component } from 'react';
import './App.css';
import HeaderLogo from './HeaderLogo.js'
import AmsterdamAll from './img/amsterdamAll.jpeg';
import BarcelonaAll from './img/barcelonaAll.jpg';
import BudapestAll from './img/budapestAll.jpg';
import DubaiAll from './img/dubaiAll.jpg';
import LondonAll from './img/londonAll.jpg';
import HongKongAll from './img/hong-kongAll.jpg';
import MachuPichuAll from './img/machu-picchuAll.jpg';
import MisionesAll from './img/misionesAll.jpg';
import NewYorkAll from './img/new-yorkAll.jpg';
import ParisAll from './img/parisAll.jpg';
import RomaAll from './img/romeAll.png';
import SanPabloAll from './img/sao-paulo.jpg';
import FOOTER from './footer.js';
import FetchDataCities from './FetchingDataCities';
import FilterForm from './filterForm';



class All extends Component  {
  render (){ return (
        <div >
    <div>
    <HeaderLogo></HeaderLogo>
    <FilterForm></FilterForm>

<FetchDataCities></FetchDataCities>

    </div>
          
          <div className="AllTheCities">

    <br></br>
  <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Amsterdam</p>
  </div> 
  <img src={AmsterdamAll}  alt="Amsterdam"   /> 
    
     </div>

     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Budapest</p>
  </div> 
  <img src={BudapestAll}  alt="Budapest"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Dubai</p>
  </div> 
  <img src={DubaiAll}  alt="Dubai"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>London</p>
  </div> 
  <img src={LondonAll}  alt="London"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Barcelona</p>
  </div> 
  <img src={BarcelonaAll}   alt="Barcelona"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Hong-Kong</p>
  </div> 
  <img src={HongKongAll}  alt="HongKong"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Machu-Pichu</p>
  </div> 
  <img src={MachuPichuAll} alt="MachuPichu"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Misiones</p>
  </div> 
  <img src={MisionesAll}  alt="Misiones"  />
    
     </div>
     <br></br>

     
     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>New York</p>
  </div> 
  <img src={NewYorkAll}   alt="NewYork"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Paris</p>
  </div> 
  <img src={ParisAll}  alt="Paris"  />
    
     </div>
     <br></br>

     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Roma</p>
  </div> 
  <img src={RomaAll} alt="Roma"  />
    
     </div>
     <br></br>

     
     <div className="ImagenConCartel"> 
  <div className="ContenedorCartel">
  <p>Sao Paulo</p>
  </div> 
  <img src={SanPabloAll}  alt="SanPablo"  />
    
     </div>

     <hr></hr>

     <FOOTER></FOOTER>

    
   
    </div>

    </div>


    

        
        
      
      
 
    
)


}



}



export default All;





