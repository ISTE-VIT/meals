import React, {useState ,setState} from 'react';
import {View, Text,TouchableOpacity, Image, FlatList, Button, StyleSheet, ScrollView,RefreshControl, SafeAreaView} from 'react-native';
import NewHead from './stack2';
import { withNavigation} from 'react-navigation';
import Filter from './components/filter';
import MEALS from './components/info';
import Filter2 from './components/Add';
import Constants from 'expo-constants';
import Favorites1 from './components/favoriteslist';

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function RenderImage({navigation}){
    const [refreshing, setRefreshing] = React.useState(false);

    function refreshPage() {
      window.location.reload(false);
    }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);
    return <View>
                {/* <Button title="refresh" onPress={() => setState({dummy: 1})} /> */}
                <SafeAreaView style={styles.container}>

                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                    colors={['transparent']}
                    style={{backgroundColor: 'white'}}
                      progressBackgroundColor='transparent' 
                      tintColor='transparent'
                      />
                    }
                > 
                    <Text style={{color:'gray'}} ></Text>
                    {/* <Filter val1={Filter2[0]} val2={Filter2[1]} val3={Filter2[2]} val4={Filter2[3]} navigation={navigation} />  */}
                  </ScrollView>
                </SafeAreaView>
                 <Filter style={{position: 'absolute', top: 4,}} val1={Filter2[0]} val2={Filter2[1]} val3={Filter2[2]} val4={Filter2[3]} navigation={navigation} />
            </View>
};

const styles = StyleSheet.create({
    container: {
      height: "6%",
      position: 'relative',
      top: 8
    // bottom: 20
      // width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    scrollView: {
      flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    
    },
    box: {
      width: "40%",
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 80,
      height: 220,
      marginLeft: "5%",
      borderRadius:10,
      marginHorizontal:10,
      alignSelf: 'center',
      backgroundColor:'black',
  },
  content: {
      alignSelf: 'center',
      textAlign: 'center',
      // flexDirectin: 'column'
  },
  low: {
      marginBottom: 15,
      flexDirection: 'row',
      // backgroundColor:'black',
  },
  img: {
      borderRadius:10,
  }
  });

export default withNavigation(RenderImage);

// import React from 'react';
// import {Text, FlatList, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
// import MEALS from './components/info';
// import {withNavigation} from 'react-navigation';
// function RenderImage({navigation}){
//     var c=2;
//     return <View>
//     <View style={styles.low}>
//         <FlatList  
//         // horizontal={c%2==0 ? true: false}
//      keyExtractor={friend=>friend.id}
//      data={MEALS}
//      numColumns={c}
//      renderItem={({item})=>{
//       return <View style={styles.box}>
//       <TouchableOpacity onPress={()=> navigation.navigate('Results', {id: item.id})}>
//            <View style={styles.img}>
//             <Image source = {{uri:item.imageUrl}}
//                 style = {{ width: "98%", height: 170, borderRadius: 10 }}
//                 /></View>
//         <View style={styles.content}>
//             <Text style={{color: 'white',fontWeight:'bold',fontSize:15,textDecorationLine: 'underline'}}>{item.title}</Text>
//             </View>
//             </TouchableOpacity> 
//         </View>
//     }}/>
//     </View>
//     </View>
// };

// const styles=StyleSheet.create({
//     box: {
//         width: "40%",
//         borderWidth: 1,
//         borderColor: 'gray',
//         marginBottom: 80,
//         height: 220,
//         marginLeft: "5%",
//         borderRadius:10,
//         marginHorizontal:10,
//         alignSelf: 'center',
//         backgroundColor:'black',
//     },
//     content: {
//         alignSelf: 'center',
//         textAlign: 'center',
//         // flexDirectin: 'column'
//     },
//     low: {
//         marginBottom: 56,
//         flexDirection: 'row',
//         // backgroundColor:'black',
//     },
//     img: {
//         borderRadius:10,
//     }
// });
// export default withNavigation(RenderImage);