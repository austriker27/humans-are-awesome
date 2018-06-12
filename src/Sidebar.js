import React, { Component } from 'react';
import './Sidebar.css';

import randomColor from 'randomcolor';

// setting up a random color generator based onClick

// Returns a hex code for a 'truly random' color
let randomNumber = randomColor({
  luminosity: 'random',
  hue: 'random'
});

class Sidebar extends Component {
  render() {
    return (
      <div className="relative">
        <div className="bg-grey w-32 absolute pin-l h-screen block">
          <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
          Random Color
          </button>

          <ul className="list-reset"> 
            <li className="">
              <a className="" href="#" alt="">Red
              </a>
            </li>
            <li className="">
              <a className="" href="#" alt="">Orange
              </a>
            </li>
            <li className="">
              <a className="" href="#" alt="">Yellow
              </a>
            </li><li className="">
              <a className="" href="#" alt="">Green
              </a>
            </li>
            <li className="">
              <a className="" href="#" alt="">Blue
              </a>
            </li>
            <li className="">
              <a className="" href="#" alt="">Purple
              </a>
            </li>
            <li className="">
              <a className="" href="#" alt="">Brown
              </a>
            </li>
            <li className="">
              <a className="" href="#" alt="">Gray
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default Sidebar;
