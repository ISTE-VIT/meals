import { createStackNavigator } from 'react-navigation-stack';
import {View, Alert,Text,TouchableOpacity, StyleSheet, Button} from 'react-native';
import Header from "./header";
// import { createStackNavigator } from '@react-navigation/stack';
import Show from './recipes';
import {Ionicons} from '@expo/vector-icons';
import Item1 from './components/require';
import Nav from './tab';
import MEALS from './components/info';
import {withNavigation} from 'react-navigation';
import Categ from './components/array';
import React from 'react';
import Container from './stack2';
import { NavigationContainer } from '@react-navigation/native';
import {Entypo} from '@expo/vector-icons';
import Favorites1 from './components/favoriteslist';
// import AboutScreen from './AboutScreen';
var m=-1;
function Find({navigation}){
  const id= navigation.getParam('id');
  var i= -1;
    var c=2;
    function Helper(id){
        for (i = 0; i < MEALS.length; i++) {
            // console.log(i);
            if (MEALS[i].id === id) {
                // console.log(i);
                return i;
            }
        }
        return i;
    };
    m=Helper(id);
    i=1;

    function List(myVal){
        var position;

    position = Favorites1.indexOf(myVal);

    if (!~position) {
        Favorites1.push(myVal);
    }
    const showAlert=()=>{
      Alert.alert(
        'Added to favorites'
      )
    }
    }


  return <View>
          <Entypo name="star-outlined" style={{right:10}} onPress={() => List(MEALS[m])} color='black' size={26} />
          {/* <Text style={{flex: 2, fontSize: 16}}>Add to favorites</Text> */}
  </View>
}
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
    navigationOptions: ({navigation}) => {
      return { headerRight: () => <Find navigation={navigation} />
    }}
  },
  Recipe: {
    screen: Item1,
  },
  Categories: {
    screen: Categ,
  },
});


export default withNavigation(AboutStack);