import { createStackNavigator } from 'react-navigation';
import Pass from './pass';
import VisitorList from './visitorList';
import VisitorPass from './visitorPass';
import AddVisitor from './addVisitor';
import visitorAccess from './visitorAccess';
import VisitorTime from './visitorTime';

export default createStackNavigator({
    Pass,
    VisitorList,
    VisitorPass,
    AddVisitor,
    visitorAccess,
    VisitorTime
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  initialRouteParams: { transition: 'horizontal' },
  transitionConfig: TransitionConfig,
});

const TransitionConfig = () => {
  return {
    transitionSpec: TransitionSpec,
    screenInterpolator: (sceneProps) => {
      const params = sceneProps.scene.route.params || {};
      const transition = params.transition || Platform.OS;

      return {
        horizontal: forHorizontal(sceneProps),
        vertical: forVertical(sceneProps),
        modal: forVertical(sceneProps),
        fade: forFade(sceneProps),
        ios: forHorizontal(sceneProps),
        android: forFadeFromBottomAndroid(sceneProps),
      }[transition];
    }
  }
}