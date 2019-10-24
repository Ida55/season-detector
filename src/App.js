import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
class App extends Component {
  state = { 
    lat: null,
    errorMessage: ''
   };

  constructor(props) {
    super(props);
  }
  
  //Lifecycle method
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() { 
    
      if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
      } 
      
      if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
      }
      
      return <Spinner message="Please accept location request"/>
    };
  }
 
export default App;

