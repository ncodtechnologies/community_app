import { createStackNavigator } from "react-navigation";

import MaintenanceReqDate from "../components/mainmenu/service_request/maintenance/date";
import MaintenanceReqDescription from "../components/mainmenu/service_request/maintenance/description";
import SRHome from "../components/mainmenu/service_request/";

const root = createStackNavigator({
  SRHome: {
    screen: SRHome,
    navigationOptions: {
      header: null
    }
  },
  MaintenanceReqDate: {
    screen: MaintenanceReqDate,
    navigationOptions: {
      header: null
    }
  },
  MaintenanceReqDescription: {
    screen: MaintenanceReqDescription,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
