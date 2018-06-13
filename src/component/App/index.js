import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'


import Header from '../Header';
import Sidebar from '../Sidebar'
import AllColorsList from '../AllColorsList';
import Pagination from '../Pagination/';
import SingleColorDetail from '../SingleColorDetail';

require('typeface-source-serif-pro');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colorsArray: [],
      selected: false,
      currentPage: 1,
      colorsPerPage: 12
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="flex">
          <Sidebar/>
          <BrowserRouter>
            <Route path="/" component={AllColorsList} />
            
          </BrowserRouter>
        </div>
        <Pagination onClick={this.state.colorsArray}/>
      </div>
    );
  }
}

// add in the browser router
// <Route path="/:hex" component={SingleColorDetail} />

export default App;
