import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function Search1({term, onTermChange, onSubmit}) {
    return (
    <View style={styles.back}>
    {/* for vector icons-  https://github.com/expo/vector-icons */}
      <Ionicons size={30} style={styles.icon} name="ios-search" />
      <TextInput style={styles.search} 
          autoCapitalize='none'
          autoCorrect={false}
          placeholder="Search"
          value={term}
          onChangeText={newTerm => onTermChange(newTerm)}
          onEndEditing={onSubmit}
      />
    </View>
  )
};

const styles=StyleSheet.create({
    back: {
        // backgroundColor: 'black',
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        width: '80%',
        marginHorizontal: 3,
        flexDirection: 'row',
        left: '4%'
    },
    icon: {
        flex: 1,
        width: 10,
        paddingLeft: 5,
        paddingTop: 3
        
    },
    search: {
        flex: 8,
        fontSize: 20
    }
});

export default Search1;