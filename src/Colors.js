import React, { Component } from 'react';
// import './Colors.css';

import randomColor from 'randomcolor';

class Colors extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colorsArray: [],
    };
  }

  componentWillMount(){
    var colors = [...randomColor({
      count: 100,
      luminosity: 'random',
    })];
   //  take colorsArray and add in colors to the array
    this.setState(colorsArray => {
      return {colorsArray: colors};
    });
  }

  render() {

    const colorSwatchBackground = {
        backgroundColor: '#6C6C6C',
    }

    return (
      <div className="colors m-8">
        <div className="flex flex-wrap justify-around">
        {this.state.colorsArray.map(color => 
          <div className="m-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-{color} w-48">
              <div style={colorSwatchBackground} className="h-32"></div>
              <div className="px-6 py-4">
                <p className="text-grey-darker">
                  {color}
                </p>
              </div>
            </div>
          </div>
          
        )}
        
          
        </div>
        
      </div>
    );
  }
}

export default Colors;
