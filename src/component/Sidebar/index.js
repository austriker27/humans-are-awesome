import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom'


class Sidebar extends Component {
  render() {
    const colors = this.props.colors;
    const randomColor = colors[(Math.floor(Math.random()*colors.length))];

    return (
      <div className="min-h-screen h-auto max-w-sm mt-8 ">
        <div className="p-4 w-64 my-4">
          <Link 
            to={randomColor.substring(1)} 
            className="w-full bg-white hover:bg-grey-darkest text-grey-darkest hover:text-white py-4 px-4 border border-grey-darkest hover:border-transparent rounded no-underline">
            Random Color
          </Link>
        </div>

        <ul className="list-reset flex flex-col"> 
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Red
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Orange
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Yellow
            </button>
          </li><li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Green
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Blue
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Purple
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Brown
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-grey-darkest" href="#" alt="">Gray
            </button>
          </li>
        </ul>
      </div>      
    );
  }
}

export default Sidebar;
