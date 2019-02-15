// container handles the flow of the data. general idea not required
import React, { Component } from 'react';
import './Home.css';

//store the info from form so it doesn't forget it all. 

class Container extends Component {
  state = {
    senator: [],  
  };
    componentDidMount () {
      fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
      .then(senData => {
      return senData.json();
      })
      .then(data => {
        console.log("data:", data)
        this.setState({senators: data})
      });
    }
  // document.getElementById('search')
  // searchHandler(s.value)
    

  
  render()
  {
    // const {seators, filterInput}
    return (
      
      <div className="Container">
        <p>container</p> 
      </div>
    );
  
  }}

export default Container;