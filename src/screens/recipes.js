import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image, CheckBox, FlatList, Button, ScrollView} from 'react-native';
import MEALS from './components/info';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

var m=-1;
function Show({navigation}){
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
    
    return <View style={{backgroundColor:'black'}}><Text></Text>
            <Image source = {{uri: MEALS[m].imageUrl}}
                style = {{ width: 380, height: 300, borderRadius: 10, alignSelf: 'center' }}
                />
              <ScrollView> 
            <Text style={{textAlign: 'center',textDecorationLine: 'underline', fontSize:30,fontWeight:'bold',color:'white'}}>{MEALS[m].title}</Text>
            <View style={styles.lew}>
            <Image style={{width:30,height:30,left:'2%'}} source={require('./coins.png')}/>
            <Text style={{color:'white',fontSize:25}}> {MEALS[m].affordability}</Text>
            </View>
            <View style={styles.low}>
                <Ionicons name='ios-timer' size={40} color='white' />
                {/* <Image style={{width:30,height:30,left:'2%'}} source={require('./clock.png')}/> */}
            <Text style={{color:'white',fontSize:25}}> {MEALS[m].duration} minutes</Text>
            </View>
            <View style={styles.lew}>
                <Text style={{color:'white',fontSize:25}}>Complexity  </Text>
            <AntDesign name='arrowright' size={40} color='white' />
            <Text style={{color:'white',fontSize:25}}> {MEALS[m].complexity}</Text>
            </View>
            
            
            <View style = {styles.lineStyle} />
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            {/* <View style={{ flexDirection: 'row', marginLeft: 10, backgroundColor:'white'}}> */}
            <CheckBox style={{height:55,width:50, backgroundColor:'black'}} title='Gluten free' value={MEALS[m].isGlutenFree ? true : false}  />
            <Text style={{marginTop:8, fontSize: 25,color:'white'}}> Gluten Free</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox  style={{height:55,width:50, backgroundColor:'black'}} title='Vegan' value={MEALS[m].isVegan ? true : false}  />
            <Text style={{marginTop: 8, fontSize:25,color:'white'}}> Vegan</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50, backgroundColor:'black'}} title='Vegetarian' value={MEALS[m].isVegetarian ? true : false}  />
            <Text style={{marginTop: 8, fontSize: 25,color:'white'}}> Vegetarian</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10}}>
            <CheckBox style={{height:55,width:50, backgroundColor:'black'}} title='Lactose free' value={MEALS[m].isLactoseFree ? true : false}  />
            <Text style={{marginTop: 8, fontSize: 25,color:'white'}}> Lactose Free</Text>
            </View>
            <View  style={{width:500,height:400,alignSelf: 'center',backgroundColor:'black'}}>
            <Button title="Recipe" onPress={()=> navigation.navigate('Recipe', {id: m})} />
</View>
</ScrollView> 
    </View>
};
const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 1,
          borderColor:'white',
          margin:10,
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

     }
   });

function Variable(){
    return m;
};

export default Show;Variable;