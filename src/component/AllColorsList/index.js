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
    for (let i = 1; i <= Math.ceil(colorsArray.length / colorsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <React.Fragment> 
        { cards }
        <ul className="list-reset flex" id="pageNumbers">
          { renderPageNumbers }
        </ul>   
      </React.Fragment>

    )
  }
}

export default AllColorsList;