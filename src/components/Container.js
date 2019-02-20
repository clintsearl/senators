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
        (<div className="senatorInfo" key={index}> <h3>{senator.name}</h3>
        <p>{senator.party}</p>
        <p>{senator.state_name}</p>
        <ul>
          <li>{senator.entered_office}</li>
          <li>{senator.term_end}</li>
          <li>{senator.gender}</li>
          <li>{senator.ethnicity}</li>
          <li>{senator.religion}</li>
        </ul>
        <p>{senator.biography}</p>

        </div>)
        )}
      </div>
    );
  
  }}

export default Container;