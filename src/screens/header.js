import React from 'react';
import {StyleSheet, Text, View, Dimensions, useWindowDimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

function Header({navigation, title}) {
    // const screenWidth = Math.round(useWindowDimensions().width);
    return (
        <View style={{flexDirection: 'row',backgroundColor:"#d11d4c", width: 768}}>
            <Ionicons name="ios-menu" size={50} style={styles.icon} 
            onPress={() => navigation.openDrawer()} color="white" />
            <Text style={{fontSize: 30, backgroundColor:"#d11d4c", marginLeft: '13%',color:"white",fontWeight:"bold"}}>{title}  </Text>
        </View>
    )
};

const styles=StyleSheet.create({
    icon: {
        marginLeft: '-1%',
        // position: 'absolute',
        left:8,
        color:"white"
        // top: 25,
    }
});

export default withNavigation(Header);