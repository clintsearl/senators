import React, { Component } from 'react';
import './Home.css';
// import Container from './components/Container';

//statefull component
//event bubbling formsubmited call series of events


class Home extends Component {
  
 state = {
   search: "",
    party: ""
  }
  query = []

  render(){
  // console.log(Home.state.search)
  
  console.log(this)
  
    return (
      
      <div>
        <p>This is the form here</p>  
        <div className="form-group">
          <form>
          <label htmlFor="query">Query</label>
             <input type="search" id="query" name="query" onChange={e => this.setState({search: e.target.value})} placeholder="Search"  />        
                    {/* <label htmlFor="search" >Search</label> */}
            {/* <input type="search" id="query" name ="query" value={query} onChange={e =>setQuery} placeholder="Search Senator's Name"/>
            <label htmlFor="party">Party</label>*/}
            <select className="form-control" id="party" name="party" onChange = {e => this.setState({party: e.target.value})}>
              <option value= "">Choose</option>
              <option value= "republican">Republican</option>
              <option value= "democrat">Democrat</option>
              <option value= "indepentent">Indepentent</option>
            </select>
        	<label htmlFor="state" className="col-sm-2 control-label">State
          <div className="col-sm-10">
            <select className="form-control" id="state" name="state">
              <option value="">N/A</option>
              <option value="AK">Alaska</option>
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DC">District of Columbia</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="IA">Iowa</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="MA">Massachusetts</option>
              <option value="MD">Maryland</option>
              <option value="ME">Maine</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MO">Missouri</option>
              <option value="MS">Mississippi</option>
              <option value="MT">Montana</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="NE">Nebraska</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NV">Nevada</option>
              <option value="NY">New York</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="VT">Vermont</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
              <option value="WV">West Virginia</option>
              <option value="WY">Wyoming</option>
            </select>
           
          </div>
          </label>
          <br/>
          <button type="button" id="search">Search</button>
          </form>
        </div>

      </div>
    
      );  }
  }
export default Home;