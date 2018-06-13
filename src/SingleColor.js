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

    const renderOneColor = currentColors.map((oneColor, index) => {
      return 
        <div className="colorDetails">
          <div style={{ backgroundColor: oneColor }} className="h-32">
          </div>
          <div className="px-6 py-4">
            <p className="text-grey-darker text-left">
              {oneColor}
            </p>
          </div>
          
        </div>
        
    })
    ;

    return (
      
      <h1>Selected one color </h1>

    ) 
  }
}

export default AllColorsList;