import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import MEALS from './components/info';

function Item2({id ,navigation}){
    var m=id;
    return <View >
            <Text style={{marginLeft: 12, marginTop: 15, fontSize:30, fontWeight: 'bold',alignSelf:'center',textDecorationLine: 'underline'}}>Items Required</Text>
                
          <FlatList 
                keyExtractor={friend=> Math.random().toString()}
                data={MEALS[0].ingredients}
               
                renderItem={({item})=>{
                return <View style={{marginTop: 5, marginLeft: 10,height:20}}>
                    <View>
                    <Text style={{fontSize:15,fontWeight:'bold'}}> >  {item}</Text>
                        </View>
                </View>
            }}/>   
            </View>
}

export default Item2;
