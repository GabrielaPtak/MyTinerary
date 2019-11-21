import React from 'react';
import './App.css';
import Buscador from './buscador';
import Boton from './boton';
import {addCity,getCities} from './actions/UpdateCities'
import { connect } from 'react-redux'

class SearchCities extends React.Component {
 constructor(props){
   super(props);
   this.state= {
     name:"",
     country:""
   }
 }

 
onChange2 = name => event => {
  let value_ = name === 'image'
  ? event.target.files[0]
  : event.target.value

  this.setState({[name]: value_ })

}


submitForm =()=> {
  
  fetch("http://localhost:8080/cities/City",{
    method: 'POST',
    body:JSON.stringify(this.state),
    headers:{
      'Content-Type': 'application/json'
    }
   }).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data)
    this.props.dispatch(addCity(data)) 
  
  }) 
  
}



componentDidMount() {
  console.log("this")
  console.log(this)
  this.props.getCities()
}

  render(){
    console.log("this.props2222")
    console.log(this.props)
    return (
      <React.Fragment>
        <div>
        <Buscador></Buscador>
        </div>
        <hr/>
        <div className="asideform formulario">
          <form onSubmit={(e)=>{e.preventDefault()}}> 
            name:      <input type="text"  onChange={this.onChange2('nombre')} placeholder="name"/> <br/>
            country:      <input type="text"  onChange={this.onChange2('categoria')} placeholder="country"/>

<input type="submit" onClick={()=>{this.submitForm()}}></input>
          </form>

          <ul>
            {this.props.city &&  this.props.city.filter((city)=>{return city.name && ( city.name.indexOf(this.props.buscador)!=-1)}).map((city)=>{
              return (
                <li  key={city._id}>
                  {city.name}
                </li>
            
              )
            })}
          </ul>
        </div>
        <hr/>
        <div id="reiniciar">
          <Boton></Boton>
        </div>
        <div id="guardar">
        <Boton></Boton>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state2")
  console.log(state)
  return {
    cities:state.cityReducer,
    buscador:state.buscadorReducer
  }
}
export default connect(mapStateToProps, {getCities})(SearchCities);