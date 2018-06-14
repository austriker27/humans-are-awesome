import React from 'react';
import ColorCard from '../ColorCard';
import randomColor from 'randomcolor';
import { Link } from 'react-router-dom'

class SingleColorDetail extends React.Component {

   // run a function from the randomColor library that changes the luminosity based on what we pass in

  getVariation(lumin){
    return randomColor({
      luminosity: lumin,
      hue: this.SelectedColor,
    })
  }
  
  render(){   
    // based on the value that is on the URL string, the user is selecting that color
    this.SelectedColor = this.props.match.params.hex;

  return(
    <React.Fragment>
      <div className="m-4 rounded overflow-hidden shadow w-5/6 mx-auto">
        <div 
          className="text-grey-darker text-left"
          style={{ textDecoration:'none' }}
        >         
          <div 
            style={{ backgroundColor: `#${this.SelectedColor}` }} 
            className="h-112"
          >
          </div>
          <div className="px-6 py-8">
            <p className="text-grey-darker text-left text-2xl">
            #{this.SelectedColor}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-row justify-around m-4">
        <ColorCard color={this.getVariation('dark')} />
        <ColorCard color={this.getVariation('dark')} />
        <ColorCard color={`#${this.SelectedColor}`} />
        <ColorCard color={this.getVariation('light')} />
        <ColorCard color={this.getVariation('light')} />
      </div>

      <Link 
        className="bg-white hover:bg-grey-darkest text-grey-darkest hover:text-white py-4 px-4 border border-grey-darkest hover:border-transparent rounded mx-auto h-12 w-48 m-4 no-underline text-center"
        to="/"
      > 
        Clear
      </Link>
  
    </React.Fragment>
  )}
};

export default SingleColorDetail;