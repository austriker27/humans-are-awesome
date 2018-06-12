import React, { Component } from 'react';
import './Header.css';

import HelpfulHumanLogo from './assets/logo-symbol.svg'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="h-16 bg-black">
          <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8 z-10">
            
            <div className="flex items-center ">
              <img src={HelpfulHumanLogo} className="h-6" alt="Logo">
              </img> 
            </div>
          
            <div
              className="bg-white text-black rounded block md:inline-block text-white uppercase tracking-wide" 
            >
              Search  
            </div>
                
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
