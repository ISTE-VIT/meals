import React, { useState } from 'react';
import { Text, View, ScrollView,RefreshControl, SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites1 from './components/favoriteslist';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Search from "./first";
import Categories from './Categories';
import FavoritesImage from './FavoriteScreen';
import Constants from 'expo-constants';
import AboutScreen from './AboutScreen';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function SettingsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <View style={{ flex: 1, marginTop: 10}}>
      <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull down to see Refresh</Text>
      </ScrollView>
    </SafeAreaView>
      <FavoritesImage fav={Favorites1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
    height: 100
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20
  },
});

const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
        name="Feedu"
        component={Search}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='black' size={26} />
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