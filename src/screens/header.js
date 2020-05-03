import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

function Header({navigation, title}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-menu" size={45} style={styles.icon} 
            onPress={() => navigation.openDrawer()} color="black" />
            <Text style={{fontSize: 30, left: '225%', alignItems: 'center', justifyContent: 'center'}}>{title}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    icon: {
        // position: 'absolute',
        left: 8,
        // top: 25,
    }
});

export default withNavigation(Header);