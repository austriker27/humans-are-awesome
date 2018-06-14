import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'


import Header from '../Header';
import Sidebar from '../Sidebar'
import AllColorsList from '../AllColorsList';
import SingleColorDetail from '../SingleColorDetail';
import colorsArray from '../../utils/colorGenerator';


require('typeface-source-serif-pro');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.colors = colorsArray(100);
  }

  render() {
    return (
      <div className="overflow-hidden">
      <Header/>
      <div className="">
        <Router>
          <div className="flex h-full">
            <div className="w-1/6 bg-grey h-full">
              <Sidebar colors={this.colors}/>
            </div>
            <div className="flex flex-col justify-start w-5/6 mx-2 mt-4">
              {<Route exact path="/" component={AllColorsList} />}
              {<Route exact path="/:hex" component={SingleColorDetail} colors={this.colors}/>}
            </div>
          </div>
        </Router>
      </div>
    </div>

    );
  }
}

      // <div className="overflow-hidden">
      //   <Header/>
      //   <div className="flex">
      //     <div className="w-1/6 bg-grey h-full">
      //       <Sidebar colors={this.colors}/>
      //     </div>
      //     <Router>
            
      //       <div className="flex flex-col justify-start w-5/6 mx-2 mt-8">
      //         {<Route exact path="/" component={AllColorsList} />}
      //         {<Route exact path="/:hex" component={SingleColorDetail} colors={this.colors}/>}              
      //       </div>
      //     </Router>
      //   </div>
      // </div>

export default App;
