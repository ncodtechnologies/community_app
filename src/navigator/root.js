import { createStackNavigator } from "react-navigation";

import AuthStack from "./accountstack";
import MainMenu from "./mainmenu";

const root = createStackNavigator({
  MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      header: null
    }
  },
  Auth: {
    screen: AuthStack,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
