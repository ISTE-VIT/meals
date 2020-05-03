import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from './header';
import About from './About';

function Categories(){
    return <View>
        {/* <Header /> */}
        <ScrollView >
           <Text style={{marginTop: 30}}></Text>
           <View style={{flexDirection: 'row', marginBottom: 15}} >
             <About backgroundColor1='#00FFFF' id1='c1' name1='Italian' id='c1' />
            <About backgroundColor1='#808000' id1='c1' name1='Quick & Easy' id='c2' />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}} >
             <About backgroundColor1='yellow' id1='c1' name1='Hamburgers' id='c3' />
            <About backgroundColor1='#C2D852' id1='c1' name1='German' id='c4' />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}} >
             <About backgroundColor1='#96489E' id1='c1' name1='Light & Lovely' id='c5' />
            <About backgroundColor1='#FF00FF' id1='c1' name1='Exotic' id='c6' />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}} >
             <About backgroundColor1='#008000' id1='c1' name1='Italian' id='c7' />
            <About backgroundColor1='#800000' id1='c1' name1='Quick & Easy' id='c8' />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 95}} >
             <About backgroundColor1='#800080' id1='c1' name1='Italian' id='c9' />
            <About backgroundColor1='#ADD8E6' id1='c1' name1='Quick & Easy' id='c10' />
            </View>
            </ScrollView>
    </View>
};
 export default Categories;