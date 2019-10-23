import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    lat: null,
    errorMessage: ''
   };

  constructor(props) {
    super(props);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() { 
    return <div>
      Latitude: {this.state.lat}
      <br/>
      Error: {this.state.errorMessage}
      </div>;
  };
}
 
export default App;

