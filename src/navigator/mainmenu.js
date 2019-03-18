import React, { Component } from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Menu from "../components/mainmenu/home";
import SRequestScreen from "./service_request_stack";
import Pass from "./pass_stack";
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTabs = createBottomTabNavigator({
    MainMenuHome: {
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
    SRequest: {
        screen: SRequestScreen,
        navigationOptions: {
            tabBarLabel: "Service Requests",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="build"
                    size={17}
                    color={tintColor} />
            )
        }
    }
    /*,
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
*/
},
    {
      initialRouteName: 'Pass',
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


export default createStackNavigator({ BottomTabs }, { headerMode: "none" });