import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
//* in the import means everything
import Home from "./components/Home"
import Container from "./components/Container"

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Container" component={Container}/>
    </Switch>
  </Router>
);

export default Routing


