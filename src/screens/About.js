import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet,Image} from 'react-native';
import { withNavigation} from 'react-navigation';

function About({navigation, backgroundColor1, name1,image, id}){
    var m=name1;
    var n=backgroundColor1;
    var p= id;
    var i=image;
    return <View>
           <TouchableOpacity 
            onPress={()=> navigation.navigate('Categories', {id: `${p}`})} >
                <View style={{
                     width: 180,
                        height: 130,
                        backgroundColor: `${n}`,
                        marginLeft: '11%',
                        borderRadius: 10,
                        marginVertical:10
                }} >
                    <Image style={{}} source={{uri:image}}/>
                <Text style={styles.content}>{name1}</Text></View>
            </TouchableOpacity>
    </View>
};

const styles=StyleSheet.create({
    content: {
        textDecorationColor: 'blue',
        textAlignVertical: 'bottom',
        fontWeight: 'bold',
        alignSelf: 'center',
        left: 4,
        fontSize: 25,
        width: '95%',
        color:'black'
    },
})

export default withNavigation(About);