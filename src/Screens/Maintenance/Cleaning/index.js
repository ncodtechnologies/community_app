import { createStackNavigator } from 'react-navigation';
import selPlanCleaning from './selPlan';
import SelTimeCleaning from './selTime';

export default createStackNavigator({
  selPlanCleaning: selPlanCleaning,
  SelTimeCleaning: SelTimeCleaning
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}); 