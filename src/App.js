import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    lat: null
   };

  constructor(props) {
    super(props);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
      },
      err => console.log(err)
    );
  }

  render() { 
    return <div>Latitude: {this.state.lat}</div>;
  };
}
 
export default App;

