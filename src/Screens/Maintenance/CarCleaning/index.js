import { createStackNavigator } from 'react-navigation';
import SelPlan from './selPlan';
import VehicleNo from './vehicleNo';

export default createStackNavigator({
  SelPlan: SelPlan,
  VehicleNo: VehicleNo
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 