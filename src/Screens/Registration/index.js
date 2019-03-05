import { createStackNavigator } from 'react-navigation';
import Register from './register';

export default createStackNavigator({
    Register: Register
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 