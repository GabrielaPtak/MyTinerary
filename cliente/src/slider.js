import React from 'react'
import Amsterdam from './img/amsterdam.jpeg';
import Barcelona from './img/barcelona.jpg';
import Budapest from './img/budapest.jpg';
import Dubai from './img/dubai.jpg';
import London from './img/london.jpg';
import HongKong from './img/hong-kong.jpg';
import MachuPichu from './img/machu-picchu.jpg';
import Misiones from './img/misiones.jpg';
import NewYork from './img/new-york.jpg';
import Paris from './img/paris.jpg';
import Roma from './img/rome.png';
import SanPablo from './img/sao-paulo.jpg';




class Slider extends React.Component {
  render (){ return (

<div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">  
    <img src={Amsterdam} className="col-md-12"  alt="Amsterdam"   /> 
    <img src={Budapest} className="col-md-12" alt="Budapest"  />
    <img src={Dubai} className="col-md-12" alt="Dubai"  />
    <img src={London} className="col-md-12" alt="London"  />
    </div>
    <div className="carousel-item">
    <img src={Barcelona} className="col-md-12"  alt="Barcelona"  />
    <img src={HongKong} className="col-md-12" alt="HongKong"  />
    <img src={MachuPichu} className="col-md-12" alt="MachuPichu"  />
    <img src={Misiones} className="col-md-12" alt="Misiones"  />
  
    </div>
    <div className="carousel-item">
    <img src={NewYork} className="col-md-12"  alt="NewYork"  />
    <img src={Paris} className="col-md-12" alt="Paris"  />
    <img src={Roma} className="col-md-12" alt="Roma"  />
    <img src={SanPablo} className="col-md-12" alt="SanPablo"  />
    
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>


    
   
   



)
}



}





export default Slider;