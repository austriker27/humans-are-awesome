import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HelpfulHumanLogo from '../../assets/logo-symbol.svg'

class Header extends Component {
  render() {
    return (
        <nav className="bg-brand-black">
          <div className="h-32 md:h-16 flex flex-col md:flex-wrap justify-between mx-auto p-4 z-10">
            
            <div className="flex sm:justify-center md:justify-start">
              <Link
                to="/"
                >
                <img src={HelpfulHumanLogo} className="h-8 sm:ml-0 md:ml-8" alt="Logo">
                </img> 
              </Link>
            </div>

            <div className="flex sm:justify-center md:justify-end">
              <input 
                type="search" 
                className="bg-purple-white rounded border-0 p-3 h-8  sm:mr-0 md:mr-8" 
                placeholder="Search">
              </input> 
            </div>

          </div>
        </nav>
    );
  }
}

export default Header;
