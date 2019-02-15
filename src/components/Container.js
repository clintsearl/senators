// container handles the flow of the data. general idea not required
import React, { Component } from 'react';
import './Home.css';

//store the info from form so it doesn't forget it all. 

class Container extends Component {
  state = {
    senators: [],  
  };

  //Or call this a function and then put "componentWillMount after and call the function."
    componentDidMount () {
      fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
      .then(senData => {
      return senData.json();
      })
      // then is returning a promise and thats why we can call one data and the other somehting else
      // setState is binding it to an object
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

        {this.state.senators.map((senator, index) => 
        (<div key={index}> <h3>{senator.name}</h3>
        <p>{senator.party}</p>
        <p>{senator.gender}</p>
        <p>{senator.state_name}</p>
        <p></p>

        </div>)
        )}
        <p>container</p> 
      </div>
    );
  
  }}

export default Container;