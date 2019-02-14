// container handles the flow of the data. general idea not required
import React, { Component } from 'react';
import './Home.css';

//store the info from form so it doesn't forget it all. 

class Home extends Component {
  state = {
    senator: [],
    party: '',
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
  console.log(this.state)
  
    return (
      
      <div className="Home">
        <p>This is the form here</p> 
      </div>
    );
  };
  }
export default Home;