import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MatchScreen from '../screens/MatchScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Match: MatchScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#2f3f99',
    pressColor: 'gray',
    style: {
      backgroundColor: '#a21d21',
    }
  },
};

HomeStack.path = '';

const TicketStack = createStackNavigator(
  {
    Ticket: TicketScreen,
  },
  config
);

TicketStack.navigationOptions = {
  tabBarLabel: 'Ticket',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'} />
  ),
  tabBarOptions: {
    activeTintColor: '#2f3f99',
    pressColor: 'gray',//for click (ripple) effect color
    style: {
      backgroundColor: '#a21d21',//color you want to change
    }
  },
};

TicketStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
  tabBarOptions: {
    activeTintColor: '#2f3f99',
    pressColor: 'gray',//for click (ripple) effect color
    style: {
      backgroundColor: '#a21d21',//color you want to change
    }
  },
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TicketStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
