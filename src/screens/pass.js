import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import NewHead from './stack2';
import { withNavigation} from 'react-navigation';

function AboutPass(){
    return <View>
            <NewHead title='Pass' />
           <Text style={{marginTop: 30}}>Pass Screen</Text>
        </View>
};

export default AboutPass;