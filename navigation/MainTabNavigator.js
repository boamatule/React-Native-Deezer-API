import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import AlbumsScreen from '../screens/AlbumsScreen';
import AlbumDetailScreen from '../screens/AlbumDetailScreen';
import StorageScreen from '../screens/StorageScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import LoginScreen from '../screens/LoginScreen';


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Albums: AlbumsScreen,
    AlbumDetail: AlbumDetailScreen,
    Favorite: FavoriteScreen,
  });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LoginStack = createStackNavigator(
  {
    Links: LoginScreen,
  },

);

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'} />
  ),
};

LoginStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Storage: StorageScreen
  },
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  // LinksStack,
  LoginStack,
  SettingsStack
 });

tabNavigator.path = '';

export default tabNavigator;
