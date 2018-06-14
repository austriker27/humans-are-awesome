import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from '../Header';
import Sidebar from '../Sidebar'
import AllColorsList from '../AllColorsList';
import SingleColorDetail from '../SingleColorDetail';
import colorsArray from '../../utils/colorGenerator';


require('typeface-source-serif-pro');

class App extends React.Component {
  constructor(props) {
    super(props);

    let totalNumberOfColors = '100';
    this.colors = colorsArray(totalNumberOfColors);
  }

  render() {
    return (
      <div className="overflow-hidden">
      
      <div className="">
        <Router>
          <div>
            <Header/>
            <div className="flex h-full">
              <div className="w-1/6 bg-brand-grey min-w-md" style={{ minWidth:'13rem' }}>
                <Sidebar colors={this.colors}/>
              </div>
              <div className="flex flex-col justify-start w-5/6 mx-2 mt-4">
                <Route exact path="/" render={(props) => ( <AllColorsList colors={this.colors}/> )} />
                {<Route exact path="/:hex" component={SingleColorDetail}/>}
              </div>
            </div>
          </div>
        </Router>
      </div>
    </div>

    );
  }
}

export default App;
