// import React, { Component } from 'react';

import randomColor from 'randomcolor';

// class AllColorsList extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       colorsArray: [],
//       selected: false,
//       currentPage: 1,
//       colorsPerPage: 12
//     };
//     this.handleColorDetails = this.handleColorDetails.bind(this);
//   }

//   handleColorDetails(index, event){
//     event.preventDefault();
//     this.setState(prevState => ({selected: true}));
//   }

//   // setup a flag for the selected color? 


//   componentWillMount(){
//     var colors = [...randomColor({
//       count: 100,
//       luminosity: 'random',
//     })];
//    //  take colorsArray and add in colors to the array
//     this.setState(colorsArray => {
//       return {colorsArray: colors};
//     });
    
//   }

//   render() {
//     const selected = this.state.selected;

//       // TODO: update colorsArray to be current colors
//     const renderColors = this.state.colorsArray.map((colorItem, index) => { 
//       return <div className="m-4" key={index}>
//         <button 
//           className="max-w-sm rounded overflow-hidden shadow-lg w-48"
//           onClick={this.handleColorDetails}
//         >
//           <div style={{ backgroundColor: colorItem }} className="h-32">
//           </div>
//           <div className="px-6 py-4">
//             <p className="text-grey-darker text-left">
//               {colorItem}
//             </p>
//           </div>
//         </button>
//         <h1>hello</h1>
//       </div>
//     })
    

//     return (       
//       <renderColors/>
//     )
//   }
// }

// module.exports = {
//   colorsArray = [...randomColor({
//     count: 100,
//     luminosity: 'random',
//   })]
// };

const colorsArray = 
[...randomColor({
  count: 100,
  luminosity: 'random',
})]
  
export default colorsArray;

