import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SearchScreen from "./SearchScreen.js";
import Notification from "./Notification.js";
import Message from "./Message.js";
import Sample from "./Sample.js";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import SideBar from "./SideBar.js";
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";

const TabBar = TabNavigator({
  Home: {screen: HomeScreen,
   navigationOptions: {
    tabBarLabel: '',
    tabBarIcon: ({ tintColor }) => <Icon name='home'  style={{ color: tintColor }} />
      },
    },
  Search: { screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => <Icon name='search' style={{ color: tintColor }} />
    },
  },
  Notification: {screen: Notification,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => <Icon name='notifications'  style={{ color: tintColor }} />
    },
  },
  Message: {screen: Message,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ tintColor }) => <Icon name='mail' style={{ color: tintColor }} />
     },
	 },
  },
  {

    tabBarPosition: 'top',
		animationEnabled: true,
		tabBarOptions: {
		activeTintColor: 'deepskyblue',
		inactiveTintColor: 'grey',
		activeBackgroundColor: "#fff",
		inactiveBackgroundColor: "#fff",
		showIcon: true,
		showLabel: false,
    indicatorStyle: {
     borderBottomColor: 'deepskyblue',
     borderBottomWidth: 2,
   },
    style: {
        backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
        }
       }
     },
 );
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: TabBar }, // Nesting tabbar in drawer navigation
    Search: {screen: SearchScreen},
    Notification: {screen: Notification},
    Message: {screen: Message},
    Sample: {screen: Sample},

  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
