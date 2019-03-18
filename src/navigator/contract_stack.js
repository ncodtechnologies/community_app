import { createStackNavigator } from "react-navigation";
import ContractHome from "../components/mainmenu/contract";

const root = createStackNavigator({
  ContractHome: {
    screen: ContractHome,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
