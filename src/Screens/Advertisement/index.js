import { createStackNavigator } from 'react-navigation';
import Home from './home';
import AdDetails from './AdDetails';
import PostPicture from './Post/postPicture';
import PostTitle from './Post/postTitle';
import PostPrice from './Post/postPrice';
import PostDescription from './Post/postDescription';
import MyAds from './MyAds/myAds';
import MyAdDetails from './MyAds/myAdDetails';
import Menu from './menu';

export default createStackNavigator({
    Menu,
    Home,
    AdDetails,
    PostPicture,
    PostTitle,
    PostDescription,
    PostPrice,
    MyAds,
    MyAdDetails
},
{
  initialRouteName: 'Menu',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

