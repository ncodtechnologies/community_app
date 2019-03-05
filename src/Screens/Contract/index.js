import { createStackNavigator } from 'react-navigation';
import ContractHome from './home';
import FurnitureIn from './FurnitureIn';
import FurnitureOut from './FurnitureOut';
import FlatInspection from './FlatInspection';
import ChequeReminder from './ChequeReminder';

export default createStackNavigator({
  ContractHome,
  FurnitureIn,
  FurnitureOut,
  FlatInspection,
  ChequeReminder
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
