import { createStackNavigator } from 'react-navigation';
import Home from './home';
import Menu from './menu';
import Notification from './Notification';
import Contract from './Contract';

export default createStackNavigator({
  Home,
  Menu,
  Notification,
  Contract
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
