import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Dashboard/>
      </div>
    )
  }
}

export default App;

