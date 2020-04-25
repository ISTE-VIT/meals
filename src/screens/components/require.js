import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import MEALS from './info';
import Variable from '../recipes';

function Item1({navigation}){
    var c=1,i=1;
    const m= navigation.getParam('id');
    // var m={props.id};
    return <View style={{backgroundColor:'gray'}}>
            <Text style={{marginLeft: 12, marginTop: 15, fontSize:30, fontWeight: 'bold',alignSelf:'center',textDecorationLine: 'underline'}}>Items Required</Text>
                
          <FlatList 
                keyExtractor={friend=> Math.random().toString()}
                data={MEALS[m].ingredients}
               
                renderItem={({item})=>{
                return <View style={{marginTop: 5, marginLeft: 10,height:20}}>
                    <View>
                    <Text style={{fontSize:15,fontWeight:'bold'}}> >  {item}</Text>
                        </View>
                </View>
            }}/>   
            <View style={{backgroundColor:'gray',height:1000}}>
        <Text style={{marginLeft: 12, marginTop: 13, fontSize: 30, fontWeight: 'bold', alignSelf: 'center',textDecorationLine: 'underline'}}>Recipe</Text>
        <View style={styles.low}>
             <FlatList 
                keyExtractor={friend=> Math.random().toString()}
                data={MEALS[m].steps}
               
                renderItem={({item})=>{
                return <View style={{marginTop:10,marginVertical:20, borderWidth: 2,borderColor:'black',}}>
                    <View>
                    <Text style={{fontSize:20}} >Step-{item}</Text>

                        </View>
                </View>
            }}/>  
            </View>  
            </View>
    </View>
};
const styles=StyleSheet.create({
    low: {
        height:460,
        backgroundColor:'gray'
    },

})

export default Item1;