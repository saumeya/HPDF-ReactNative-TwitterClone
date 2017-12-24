import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SearchScreen from "./SearchScreen.js";
import Notification from "./Notification.js";
import Message from "./Message.js";
import Sample from "./Sample.js";
import Searching from "./Searching.js";
import HomeHeader from "./HomeHeader.js";
import SearchHeader from "./SearchHeader.js";
import MsgHeader from "./MsgHeader.js";
import NotiHeader from "./NotiHeader.js";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import SideBar from "./SideBar.js";
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";

const Tab1 = StackNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: { header: props => <HomeHeader {...props} />
     }
   },
 },
    {
         headerMode: 'none',
    });

    const Tab2 = StackNavigator({
      Search: { screen: SearchScreen,
        navigationOptions: { header: props => <SearchHeader {...props} />
         }
       },
     },
        {
             headerMode: 'none',
        });
      const Tab3 = StackNavigator({
        Notification: { screen: Notification,
          navigationOptions: { header: props => <NotiHeader {...props} />
           }
         },
       },
          {
               headerMode: 'none',
          });
      const Tab4 = StackNavigator({
          Message: { screen: Message,
            navigationOptions: { header: props => < MsgHeader {...props} />
             }
           },
         },
            {
                 headerMode: 'none',
            });
 const TabBar = TabNavigator({
    Home: { screen: Tab1 ,
     navigationOptions: {
     tabBarLabel: '',
     tabBarIcon: ({ tintColor }) => <Icon name='home'  style={{ color: tintColor }} /> ,
    },
   },
    Search: {   screen: Tab2,
       navigationOptions: {
       tabBarLabel: '',
       tabBarIcon: ({ tintColor }) => <Icon name='search' style={{ color: tintColor }} /> ,
      },
    },
     Notification: { screen: Tab3 ,
      navigationOptions: {
       tabBarLabel: '',
       tabBarIcon: ({ tintColor }) => <Icon name='notifications'  style={{ color: tintColor }} /> ,
      },
    },
     Message: { screen: Tab4 ,
      navigationOptions: {
       tabBarLabel: '',
       tabBarIcon: ({ tintColor }) => <Icon name='mail'  style={{ color: tintColor }} /> ,
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

  const AppNavigate = StackNavigator({
   Home: { screen: TabBar},
   });

  const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: AppNavigate },
    Search: {screen: SearchScreen},
    Notification: {screen: Notification},
    Message: {screen: Message},
    Sample: {screen: Sample},
    Searching: {screen: Searching},
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
