import { createStackNavigator } from 'react-navigation';
import Main from './main';

export default createStackNavigator({
  Main: Main
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 