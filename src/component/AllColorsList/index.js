import React from 'react';
import ColorCard from '../ColorCard';

class AllColorsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      selected: false,
      currentPage: 1,
      colorsPerPage: 12,
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  // david - handle event click for the pagination
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    
    // setting up variables for the page numbers based on the current page and colorsPerPage from above
    const { currentPage, colorsPerPage } = this.state;
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = this.props.colors.slice(indexOfFirstColor, indexOfLastColor);

    const cards = currentColors.map((colorItem, index) => { 
      return(<ColorCard color={colorItem} key={colorItem} />)
    });
    

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.colors.length / colorsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
          key={number}
          id={number}
          onClick={this.handleClick}
          className="text-grey-darker hover:black cursor-pointer"
        >
          {number}
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="flex flex-wrap"> 
          { cards }
        </div>
        <div className="flex justify-around w-1/4 mx-auto my-4 p-0" id="pageNumbers">
          { renderPageNumbers }
        </div>   
      </React.Fragment>
    )
  }
}

export default AllColorsList;