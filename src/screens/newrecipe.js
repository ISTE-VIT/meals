import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, CheckBox, FlatList, Button, ScrollView, TouchableOpacity, TouchableHighlight,
    Alert,
    Modal,} from 'react-native';
import MEALS from './components/info';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import Favorites1 from './components/favoriteslist';
import Item2 from './Ingredients';

var m=-1;
function NewShow({route, navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    const { id } = route.params;
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
    }
    
    return <View ><Text></Text>
            <View style={{flexDirection: 'row'}}>
            <Image source = {{uri: MEALS[m].imageUrl}}
                style = {{ flex: 7, height: 260, borderRadius: 10, alignSelf: 'center' }}
                />
            <View style={{flex: 3, flexDirection: 'row', marginLeft: 5, borderColor: 'black', borderWidth: 1, height: 80}}>
                <Text style={{flex: 2, fontSize: 16}}>Add to favorites</Text>
                <Entypo name="star-outlined" style={{flex: 1}} onPress={() => List(MEALS[m])} color='black' size={26} />
                
                </View>
            </View>
              <ScrollView> 
            <Text style={{textAlign: 'center',textDecorationLine: 'underline', fontSize:30,fontWeight:'bold'}}>{MEALS[m].title}</Text>
            <View style={styles.lew}>
            <Image style={{width:30,height:30,left:'2%'}} source={require('./coins.png')}/>
            <Text style={{fontSize:25}}> {MEALS[m].affordability}</Text>
            </View>
            <View style={styles.low}>
                <Ionicons name='ios-timer' size={40} />
                {/* <Image style={{width:30,height:30,left:'2%'}} source={require('./clock.png')}/> */}
            <Text style={{fontSize:25}}> {MEALS[m].duration} minutes</Text>
            </View>
            <View style={styles.lew}>
                <Text style={{fontSize:25}}>Complexity  </Text>
            <AntDesign name='arrowright' size={40} />
            <Text style={{fontSize:25}}> {MEALS[m].complexity}</Text>
            </View>
            
            
            <View style = {styles.lineStyle} />
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            {/* <View style={{ flexDirection: 'row', marginLeft: 10, backgroundColor:'white'}}> */}
            <CheckBox style={{height:55,width:50}} title='Gluten free' value={MEALS[m].isGlutenFree ? true : false}  />
            <Text style={{marginTop:8, fontSize: 25}}> Gluten Free</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50}} title='Vegan' value={MEALS[m].isVegan ? true : false}  />
            <Text style={{marginTop: 8, fontSize:25}}> Vegan</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50}} title='Vegetarian' value={MEALS[m].isVegetarian ? true : false}  />
            <Text style={{marginTop: 8, fontSize: 25}}> Vegetarian</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50}} title='Lactose free' value={MEALS[m].isLactoseFree ? true : false}  />
            <Text style={{marginTop: 8, fontSize: 25}}> Lactose Free</Text>
            </View>
            <View  style={{width:500,height:400,alignSelf: 'center'}}>
            <View 
            style={styles.centeredView1}
            >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Item2 id={id} style={styles.modalText} />

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Ingredients</Text>
      </TouchableHighlight>
    </View>
</View>
</ScrollView> 
    </View>
};
const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 1,
          borderColor:'white',
        //   margin:10,
          marginBottom: 5
     },
     low:{
        flexDirection: 'row',
        marginVertical:10
     },
     lew:{
        flexDirection: 'row',
        marginVertical:10

     },
     les:{
        flexDirection: 'row',

     },
     centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      centeredView1: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        height: '60%',
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'relative',
        bottom: 20
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
   });

function Variable(){
    return m;
};

export default NewShow;