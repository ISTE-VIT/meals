import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,Image
} from "react-native";
import NewHead from './stack2';
import {Container,Body,Content} from 'native-base';
import Hyperlink from 'react-native-hyperlink'

const AboutPass = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (<View style={{ backgroundColor:"#d11d4c",height:"100%"}}>
  <NewHead title='About' />
    <View style={styles.centeredView}>
    <Image style={{height:180,width:180,borderRadius:100,alignSelf:"center", marginTop:50}} source={{uri:'https://i.dlpng.com/static/png/4674369-food-icon-food-court-icon-png-transparent-png-600x600-free-food-courts-in-malls-png-820_640_preview.png'}}/>
      <Text style={{textAlign:"justify",alignSelf:"auto",padding:20,color:"white",fontSize:15}}>The Meals App contains list of recipes with particular details.The Recipes are also categories (example:-Mexican, Italian so on).It contains details such as time required, complexity, affordability, ingredients, steps to be followed. If user want to see some particular Meal Recipe which is regularly used , so that meal can be added to Favorites ,so it is easily accessible.The Filter Featture of the app allow user to sort out the Recipies according to Veg,Non Veg,Gluten Free and so on.</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Hyperlink linkDefault={ true }>
            <Text style={styles.modalText}>patelrupin63@gmail.com
            </Text>
            <Text style={styles.modalText}>deepakpandey8833@gmail.com
            </Text></Hyperlink>

            <TouchableHighlight
              style={{ ...styles.closeButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>CANCEL</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Contacts</Text>
      </TouchableHighlight>
      
    </View></View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    marginTop:350,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
   
  },
  closeButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    // color: "white",
    // fontWeight: "bold",
    // marginTop: '45%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight:"bold"
  }
});

export default AboutPass;