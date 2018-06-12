import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar'
import Colors from './Colors';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <div className="">
          <div className="m-4">
            <Colors />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
