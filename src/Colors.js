import React, { Component } from 'react';
import './Colors.css';

import randomColor from 'randomcolor';

class Colors extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colorsArray: [],
      currentPage: 1,
      colorsPerPage: 12
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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
    const { colorsArray, currentPage, colorsPerPage} = this.state;
    
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colorsArray.slice(indexOfFirstColor, indexOfLastColor);
    // const colorSwatchBackground = {
    //     backgroundColor: {color},
    // }

    const renderColors = currentColors.map((colorItem, index) => { 
      return <div className="m-4" key={index}>
        <button className="max-w-sm rounded overflow-hidden shadow-lg w-48">
          <div style={{ backgroundColor: colorItem }} className="h-32">
          </div>
          <div className="px-6 py-4">
            <p className="text-grey-darker text-left">
              {colorItem}
            </p>
          </div>
        </button>
      </div>
    })
    

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(colorsArray.length / colorsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          key={number}
          id={number}
          onbuttonck={this.handleClick}
          className="text-grey-darkest"
        >
          {number}
        </button>
      );
    });

    return (
      
      <div className="colors m-8">
        <div className="flex flex-wrap justify-around">
          {renderColors}
        </div>

        <div className="list-reset flex mx-auto w-1/4 justify-around mt-8" id="pageNumbers">
          {renderPageNumbers}
        </div>
        
      </div>
    );
  }
}

export default Colors;
