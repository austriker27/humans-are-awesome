import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'


import Header from '../Header';
import Sidebar from '../Sidebar'
import AllColorsList from '../AllColorsList';
// import Pagination from '../Pagination/';
import SingleColorDetail from '../SingleColorDetail';

require('typeface-source-serif-pro');

class App extends React.Component {
  render() {
    return (
      <div className="overflow-hidden">
        <Header/>
        <div className="flex">
          <Sidebar/>
          <Router>
            <div className="flex flex-wrap justify-start w-5/6 mt-8">
              {<Route exact path="/" component={AllColorsList} />}
              {<Route exact path="/:hex" component={SingleColorDetail} />}
              
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

// add in the browser router
// <Route path="/:hex" component={SingleColorDetail} />

export default App;
