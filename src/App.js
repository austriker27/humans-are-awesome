import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <div className="flex">
          <div className="block border-solid m-6 p-6 rounded shadow-lg w-48 h-48">
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
