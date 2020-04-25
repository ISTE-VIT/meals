import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

function Header({navigation}) {
    return (
        <View style={styles.header}>
            <Ionicons name="ios-menu" size={45} style={styles.icon} 
            onPress={() => navigation.openDrawer()} color="white" />
        </View>
    )
};

const styles=StyleSheet.create({
    icon: {
        // position: 'absolute',
        right: 15,
        // top: 25,
    }
});

export default withNavigation(Header);