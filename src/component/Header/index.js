import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HelpfulHumanLogo from '../../assets/logo-symbol.svg'

class Header extends Component {
  render() {
    return (
        <nav className="bg-black">
          <div className="h-32 md:h-16 flex flex-col md:flex-wrap justify-between mx-auto p-4 z-10">
            
            <div className="w-1/2">
              <Link
                to="/"
                >
                <img src={HelpfulHumanLogo} className="h-8 ml-8" alt="Logo">
                </img> 
              </Link>
            </div>

            <div className="w-1/2 flex justify-end">
              <input 
                type="search" 
                className="bg-purple-white rounded border-0 p-3 h-8  mr-8" 
                placeholder="Search">
              </input> 
            </div>

          </div>
        </nav>
    );
  }
}

export default Header;
