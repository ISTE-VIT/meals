import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer, StackActions} from 'react-navigation';
import AboutScreen from './src/screens/AboutScreen';
// import TabNavigator from './src/screens/bottomTabNavigator.js';
import About from './src/screens/About';
import AboutStack from './src/screens/stack';
import React from 'react';
import Header from './src/screens/header';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity ,Image} from 'react-native';
import AboutPass from './src/screens/pass';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AboutStack,
    navigationOptions: {
    headerTitle: () => <Header />}
  },
  About: {
    screen: AboutScreen,
     navigationOptions: {
       headerTitle: () => <Header />
     },
  }, 
   New: {
    screen: AboutPass,
    navigationOptions: {
      headerTitle: () => <Header />
    },
  },
});

export default createAppContainer(RootDrawerNavigator);
