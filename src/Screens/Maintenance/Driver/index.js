import { createStackNavigator } from 'react-navigation';
import Main from './main';
import SelDate from './selDate';

export default createStackNavigator({
  Main: Main,
  SelDate: SelDate
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 