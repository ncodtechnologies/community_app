import { createStackNavigator } from 'react-navigation';
import selTrainerGender from './selGender';
import selTrainingPlan from './selPlan';
import selSwimmingTime from './selTime';

export default createStackNavigator({
  selTrainerGender: selTrainerGender,
  selTrainingPlan: selTrainingPlan,
  selSwimmingTime: selSwimmingTime
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 