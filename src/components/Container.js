// container handles the flow of the data. general idea not required
import React, { Component, Fragment } from 'react';
import './Home.css';

//store the info from form so it doesn't forget it all. 

class Container extends Component {
  state = {
    senator: [],
    filterInput: {},
    state: ''
  }

  getSenator= async => {
    fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
    .then(senData => {
    return senData.json();
    })
    .then(data => {
    this.setState ({ senator: data})
    })  
  }
  async componentWillMount(){
    await this.getSenator()
  }
  
  document.getElementById('search')
  searchHandler(s.value)


  render(){
    const {seators, filterInput}
  
    return (
      
      <div className="Home">
        <p>This is the form here</p> 
      </div>
    );
  };
  }
export default Container;