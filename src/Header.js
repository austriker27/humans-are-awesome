import React, { Component } from 'react';
import './Header.css';

import HelpfulHumanLogo from './assets/logo-symbol.svg'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="bg-black">
          <div className="h-16 flex flex-wrap items-center justify-between mx-auto p-4 md:p-8 z-10">
            
            <div className="flex items-center ">
              <img src={HelpfulHumanLogo} className="h-8" alt="Logo">
              </img> 
            </div>
          
            <div className="mr-6 my-2">
              <input 
                type="search" 
                className="bg-purple-white rounded border-0 p-3" 
                placeholder="Search">
  
              </input>
            </div>
                
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
