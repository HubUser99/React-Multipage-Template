import React, { Component } from 'react';

import { Router, browserHistory } from "react-router";
import routes from './routes.js';

import Menu from './Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Router history={browserHistory} routes={routes}/>
      </div>
    );
  }
}

export default App;
