import React, { Component } from 'react';
import './App.css';

import Header from '../Header';
import Sidebar from '../Sidebar'
import AllColorsList from '../AllColorsList';
import Pagination from '../Pagination/';


require('typeface-source-serif-pro');

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="flex">
          <Sidebar/>
          <AllColorsList />
        </div>
        <Pagination/>
      </div>
    );
  }
}

export default App;
