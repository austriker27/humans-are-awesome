import React from 'react';
import ColorCard from '../ColorCard';
import randomColor from 'randomcolor';
import { Link } from 'react-router-dom'

class SingleColorDetail extends React.Component {
  constructor(props) {
    super(props);
      
    this.SelectedColor = this.props.match.params.hex;
    this.generatedColor = randomColor({
      luminosity: 'light',
      hue: this.SelectedColor
    })
  }

  getVariation(lumin){
    return randomColor({
      luminosity: lumin,
      hue: this.SelectedColor,
    })
  }
  
  render(){

  // let colorDarker  = this.color;
  // let colorDarkest = this.color;
  // let colorLighter = this.color;
  // let colorLightest = this.color;
  
  return(
    <React.Fragment>
      <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg w-full mx-auto">
        <div 
          className="text-grey-darker text-left"
          style={{ textDecoration:'none' }}
        >         
          <div 
            style={{ backgroundColor: `#${this.SelectedColor}` }} 
            className="h-64"
          >
          </div>
          <div className="px-6 py-4">
            <p className="text-grey-darker text-left">
            #{this.SelectedColor}
            </p>
            <p className="text-grey-darker text-left">
            {this.generatedColor}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-wrap justify-around w-full">
        <ColorCard color={this.getVariation('dark')} />
        <ColorCard color={this.getVariation('dark')} />
        <ColorCard color={this.SelectedColor} />
        <ColorCard color={this.getVariation('light')} />
        <ColorCard color={this.getVariation('light')} />
      </div>


      <Link 
        className="bg-white hover:bg-grey-darkest text-grey-darkest hover:text-white py-4 px-4 border border-grey-darkest hover:border-transparent rounded mx-auto h-12 w-48"
        to="/"
      > 
        Clear
      </Link>
  
    </React.Fragment>

  )
  }
};

export default SingleColorDetail;