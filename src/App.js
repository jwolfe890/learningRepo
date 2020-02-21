import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ExampleClassComponent from './ExampleClassComponent.js'
import ConnectedComponent from "./ConnectedComponent"
import './App.css';



function App() {
  return (
    // <div className="App">
    //   <ExampleClassComponent />
    //   {/* <ConnectedComponent /> */}
    // </div>


  <Router>
    <div className="App">
        <Switch>
          <Route exact path='/' component={ExampleClassComponent} />
          <Route path='/path/:random' component={ConnectedComponent}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;



