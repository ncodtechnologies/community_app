import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import {
  login,
  otp,
  token
} from "../components/auth/reducer";

import {
  tenant
} from '../components/mainmenu/pass/tenant_pass/reducer';

import {visitorList} from '../components/mainmenu/pass/visitors/visitor_list/reducer';
import {visitorPass} from '../components/mainmenu/pass/visitors/visitor_pass/reducer';
import {visitorAdd} from '../components/mainmenu/pass/visitors/visitor_add/reducer';
import {maintenance} from '../components/mainmenu/service_request/maintenance/reducer';


const config = {
  key: "primary",

  storage,
  blacklist: [
    "login",
    "otp",
    "tenant",
    "visitorList",
    "visitorPass",
    "visitorAdd",
    "maintenance"
  ]
};

const combinedReducers = {
  login,
  otp,
  token,
  tenant,
  visitorList,
  visitorPass,
  visitorAdd,
  maintenance
};

export default persistCombineReducers(config, combinedReducers);
