import React, { Component } from 'react';
import './Sidebar.css';

// import randomColor from 'randomcolor';

// setting up a random color generator based onClick
// loop through the colorsArray and select an item at a random indice, numbered 0 - 99

class Sidebar extends Component {
  render() {
    return (
      <div className="relative">
        <div className="bg-grey w-48 absolute pin-l h-screen block">
          <div className="p-4 mt-8">
            <button className="w-full bg-white hover:bg-grey-darkest text-grey-darkest hover:text-white py-4 px-4 border border-grey-darkest hover:border-transparent rounded">
            Random Color
            </button>
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
        
      </div>
    );
  }
}

export default Sidebar;
