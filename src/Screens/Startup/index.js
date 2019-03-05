import { createStackNavigator } from 'react-navigation';
import Register from '../Registration';
import Login from '../Login';
import StartUp from './startpage';
import MainMenu from '../';

export default createStackNavigator({
  //StartUp,
  Login,
  Register,
  MainMenu
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
