import { createStackNavigator } from 'react-navigation';
import Login from './login';
import OTP from './otp';
import Menu from '../';

export default createStackNavigator({
    Login: Login,
    OTP: OTP,
    Menu: Menu
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 