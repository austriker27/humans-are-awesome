import React, { Component } from 'react';
import './Header.css';

import HelpfulHumanLogo from './assets/logo-symbol.svg'

class Header extends Component {
  render() {
    return (
        <nav className="bg-black">
          <div className="h-32 md:h-16 flex flex-col md:flex-wrap items-center justify-between mx-auto p-4 z-10">
            
            
            <img src={HelpfulHumanLogo} className="h-8" alt="Logo">
            </img> 
          
          
            <input 
              type="search" 
              className="bg-purple-white rounded border-0 p-3 h-8" 
              placeholder="Search">

            </input>
            
                
          </div>
        </nav>
    );
  }
}

export default Header;
