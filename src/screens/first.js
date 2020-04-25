import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity ,Image} from 'react-native';
import Search1 from './components/searchBar';
import RenderImage from './ui';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

function Search({navigation}) {
    const [term, setTerm]= useState('');

    return (
        <View style={{backgroundColor:'black'}}>
        <View >
            <View>
            {/* <Ionicons name="ios-menu" size={45} style={styles.icon} 
            onPress={() => navigation.openDrawer()} color="white" /> */}
            </View>
        <Search1 term={term} onTermChange = {newTerm => setTerm(newTerm)} 
            onSubmit={() => console.log("term submitted")}
        />
        <Text>{term}</Text>
        <RenderImage />
        </View>
        </View>
    
    );
};

const styles=StyleSheet.create({
    icon: {
        position: 'absolute',
        left: '3%',
        justifyContent: 'center',
        top:'0.01%'
    }
});

export default withNavigation(Search);


