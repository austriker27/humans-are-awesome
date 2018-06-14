import React, { Component } from 'react';
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
            className="w-full bg-white hover:bg-grey-darkest text-brand-black hover:text-white py-4 px-4 border border-grey-darkest hover:border-transparent rounded no-underline">
            Random Color
          </Link>
        </div>

        <ul className="list-reset flex flex-col"> 
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Red
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Orange
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Yellow
            </button>
          </li><li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Green
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Blue
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Purple
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Brown
            </button>
          </li>
          <li className=" p-4">
            <button className="no-underline text-brand-black" href="#" alt="">Gray
            </button>
          </li>
        </ul>
      </div>      
    );
  }
}

export default Sidebar;
