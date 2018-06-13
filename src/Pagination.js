import React, { Component } from 'react';


class Pagination extends Component {
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
  }


  handlePaginationClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const { colorsArray, currentPage, colorsPerPage} = this.state;
    const selected = this.state.selected;
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colorsArray.slice(indexOfFirstColor, indexOfLastColor);

    

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
      <renderPageNumbers/>
    );
  };
};

export default Pagination;
