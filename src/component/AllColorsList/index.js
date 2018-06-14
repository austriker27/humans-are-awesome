import React from 'react';
import { Link } from 'react-router-dom';
import SingleColorDetail from '../SingleColorDetail';
import ColorCard from '../ColorCard';
import colorsArray from '../../utils/colorGenerator';
import { withRouter } from 'react-router';


class AllColorsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      selected: false,
      currentPage: 1,
      colorsPerPage: 12,
    };
    this.colors = colorsArray(100);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    
    const { currentPage, colorsPerPage } = this.state;
    
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = this.colors.slice(indexOfFirstColor, indexOfLastColor);

    const cards = currentColors.map((colorItem, index) => { 
      return(<ColorCard color={colorItem} key={colorItem} />)
    });
    

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.colors  .length / colorsPerPage); i++) {
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
        { cards }
        <ul className="flex justify-around w-1/2 mx-auto my-4 p-0" id="pageNumbers">
          { renderPageNumbers }
        </ul>   
      </React.Fragment>

    )
  }
}

export default AllColorsList;