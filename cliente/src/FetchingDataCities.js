
import React, { Component } from "react";

class  FetchDataCities extends React.Component {
  state = {
    hasErrors: false,
    name: {}
  };

  componentDidMount() { 
    fetch("http://localhost:8080/cities/City")
      .then(res => res.json())
      .then(res => this.setState({ cities: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }
  

  render() {
    return <div>{this.state.cities && this.state.cities.map((city)=>{
      return <ul>  <li>  {city.name} </li>   </ul>
    })}</div>;
  }
}

  
  export default FetchDataCities;