import React from 'react';
import { Link } from 'react-router-dom'

class ColorCard extends React.Component {

	render() {
		return(
	
        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg w-48">
          <Link 
            className="text-grey-darker text-left"
            to={this.props.color.substring(1)} 
            style={{ textDecoration:'none' }}
          >         
            <div 
              style={{ backgroundColor: this.props.color }} 
              className="h-32"
            >
            </div>
            <div className="px-6 py-4">
              <p className="text-grey-darker text-left">
                {this.props.color} 
              </p>
            </div>
          </Link>
        </div>
		)
	}

}

export default ColorCard;