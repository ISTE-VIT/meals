import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import NewHead from './stack2';
import { withNavigation} from 'react-navigation';

function AboutScreen({navigation}){
    var m='orange';
    return <View>
            <NewHead title="About" />
           <Text style={{marginTop: 30}}>About Screen</Text>
        </View>
};

export default AboutScreen;