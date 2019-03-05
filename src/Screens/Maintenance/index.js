import { createStackNavigator } from 'react-navigation';
import Home from './maintenance';
import ReqDescription from './reqDescription';
import ReqDate from './reqDate';
import CarCleaning  from './CarCleaning';
import Laundry from './Laundry';
import Cleaning from './Cleaning';
import PersonalTrainer from './PersonalTrainer';
import SwimmingTrainer from './SwimmingTrainer';
import Cheff from './Cheff';
import Tailoring from './Tailoring';
import Tutoring from './Tutoring';
import Driver from './Driver';
import HouseInsurance from './HouseInsurance';

export default createStackNavigator({
    Home: Home,
    ReqDate: ReqDate,
    ReqDescription: ReqDescription,
    CarCleaning: CarCleaning,
    Laundry: Laundry,
    Cleaning: Cleaning,
    PersonalTrainer: PersonalTrainer,
    SwimmingTrainer: SwimmingTrainer,
    Cheff: Cheff,
    Tailoring: Tailoring,
    Tutoring: Tutoring,
    Driver: Driver,
    HouseInsurance: HouseInsurance
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 