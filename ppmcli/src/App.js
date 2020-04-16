import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProject from './components/projects/AddProject';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/addProject" component={AddProject}/>
        </Router>
    )
  }
}

export default App;

