import React, { Component } from 'react';

import randomColor from 'randomcolor';

class AllColorsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colorsArray: [],
      selected: false,
      currentPage: 1,
      colorsPerPage: 12
    };
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
    this.handleColorDetails = this.handleColorDetails.bind(this);
  }

  handleColorDetails(index, event){
    event.preventDefault();
    this.setState(prevState => ({selected: true}));
  }

  // setup a flag for the selected color? 


  handlePaginationClick(event) {
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
    const selected = this.state.selected;
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colorsArray.slice(indexOfFirstColor, indexOfLastColor);

    const renderColors = currentColors.map((colorItem, index) => { 
      return <div className="m-4" key={index}>
        <button 
          className="max-w-sm rounded overflow-hidden shadow-lg w-48"
          onClick={this.handleColorDetails}
        >
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
          onClick={this.handlePaginationClick}
          className="text-grey-darkest"
        >
          {number}
        </button>
      );
    });

    return (       
      <renderColors/>
    )
  }
}

export default AllColorsList;
