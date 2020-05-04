import { createStackNavigator } from 'react-navigation-stack';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import Header from "./header";
// import { createStackNavigator } from '@react-navigation/stack';
import Show from './recipes';
import {Ionicons} from '@expo/vector-icons';
import Item1 from './components/require';
import Nav from './tab';
import {withNavigation} from 'react-navigation';
import Categ from './components/array';
import React from 'react';
import Container from './stack2';
import { NavigationContainer } from '@react-navigation/native';
// import AboutScreen from './AboutScreen';

// const AboutStack = createStackNavigator(
//   {
//     Home: Nav,
//     Results: Show,
//     Recipe: Item1,
//     Categories: Categ,
    
    
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       // title: "Meals",
//       headerTintColor: 'white',
//       headerRight: ({navigation}) => <Header />,
//       headerStyle: {backgroundColor: 'black', borderBottomWidth: 0.5, borderBottomColor: "white", },
//       headerTitleStyle: {
//           justifyContent: 'center',
//           // borderBottomColor: "white",
//           // borderBottomWidth: 0.5
//         //   marginLeft: 150
//       }
//     }
//   }
// );

const AboutStack = createStackNavigator({
  Home: {
    screen : Nav,
    navigationOptions: ({navigation}) => {
      return { headerTitle: () => <Header navigation={navigation} title="Meals" />
    }}
  },
  Results: {
    screen: Show,
  },
  Recipe: {
    screen: Item1,
  },
  Categories: {
    screen: Categ,
  },
});


// const Stack= createStackNavigator();

// function AboutStack() {
//   return (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Nav} />
//       <Stack.Screen name="Results" component={Show} />
//       <Stack.Screen name="Recipe" component={Item1} />
//       <Stack.Screen name="Categories" component={Categ} />
//     </Stack.Navigator>
//    </NavigationContainer>
//   );
// }


export default withNavigation(AboutStack);