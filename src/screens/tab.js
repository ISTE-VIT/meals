import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Search from "./first";
import Categories from './Categories';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white' }}>
      <Text style={{color: 'white'}}>Favorites!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
      <Tab.Screen 
        name="Feed"
        component={Search}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='black' size={26}  />
          ),
        }}
      />
        
        <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: () => (
            <FontAwesome name="certificate" color='black' size={26} />
            // <Entypo name="star-outlined" color='black' size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Favorites"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
            <Entypo name="star-outlined" color='black' size={26} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default createStackNavigator({ Nav }, { headerMode: "none" });