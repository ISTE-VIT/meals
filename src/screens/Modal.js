import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity ,Image,Modal} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
function Mod(){
    const [modalOpen,setModalopen]=useState(false);
    return(
        <Modal visible={modalOpen} animationType='slide'>
            <View>
                <MaterialIcons  name='close' size={24} style={{}} onPress={()=>setModalopen(false)}/>
                <Text>bhai kaisa hai</Text>
            </View>
            <MaterialIcons  name='add' size={24} style={{}} onPress={()=>setModalopen(true)}/>
        </Modal>
    )
}
export default Mod;