import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar'
import Colors from './Colors';

require('typeface-source-serif-pro');

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="flex">
          <Sidebar/>
          <div className="">
            <Colors />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
