import React, { Component } from 'react';

import './App.css';
// import Home from './components/Home';
// import Container from './components/Container';

import Routing from "./Routing"



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1>Senator's Information</h1>
        </header> */}
        <Routing/>
        
        {/* <p>Use the form to find information about the United States senators.</p> */}
                
      </div>
    );
  }
}

export default App;
