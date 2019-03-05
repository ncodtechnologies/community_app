import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pass from './Pass';
import MaintenanceScreen from './Maintenance';
import Advertisement from './Advertisement';
import Info from './Info';
import Menu from './menu';

const SettingsTabs = createBottomTabNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: {
            tabBarVisible: false,
            tabBarLabel: "Menu",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Pass: {
        screen: Pass,
        navigationOptions: {
            tabBarLabel: "Pass",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="fingerprint"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Maintenance: {
        screen: MaintenanceScreen,
        navigationOptions: {
            tabBarLabel: "Service Requests",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="build"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Advertisement: {
        screen: Advertisement,
        navigationOptions: {
            tabBarLabel: "Ads",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="done"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Info: {
        screen: Info,
        navigationOptions: {
            tabBarLabel: "Info",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="error"
                    size={17}
                    color={tintColor} />
            )
        }
    }
},
    {
      initialRouteName: 'Menu',
      tabBarOptions: { 
        activeTintColor: '#83ABCA',
        inactiveTintColor: 'white',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#0574CA',
        }
      }
  }
  );


export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });