import { createStackNavigator } from 'react-navigation';
import Home from './home';
import Suggestion from './suggestion';
import Complaint from './complaints';
import NotificationList from '../Notification/notification_list';

export default createStackNavigator({
    Home: Home,
    Suggestion: Suggestion,
    Complaint: Complaint,
    NotificationList: NotificationList
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 
