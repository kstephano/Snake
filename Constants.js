import { Dimensions } from 'react-native';

export const randomPosition = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min))

export default {  
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,
  GRID_SIZE: 15,
  CELL_SIZE: 20,
  GREEN: '#64eb34',
  BLUE: '#347deb',
  RED: '#ff4046'
};
