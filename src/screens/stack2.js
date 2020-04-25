import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

function NewHead({navigation, title}) {
    return (
        <View style={{backgroundColor: 'black', width: "100%", alignItems: 'center', height: 80, flexDirection: 'row'}} >
            <Ionicons name="ios-menu" size={45} style={{left: 12}}
            onPress={() => navigation.openDrawer()} color="white" />
            <Text style={{color: 'white', marginLeft: "32%", fontSize: 28}}>{title}</Text>
        </View>
    )
};

export default withNavigation(NewHead);