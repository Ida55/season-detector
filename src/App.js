import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    lat: null,
    errorMessage: ''
   };

  constructor(props) {
    super(props);
  }
  
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
      return <div>Latitude: {this.state.lat}</div>
      }

      return <div>Loading!</div>

    };
  }

 
export default App;

