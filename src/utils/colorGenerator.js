
import randomColor from 'randomcolor';

const colorsArray = (number) => {
  return([...randomColor({
    count: number,
    luminosity: 'random',
  })])
}
  
export default colorsArray;

