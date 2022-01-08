import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class FirstPage extends Component{  
  
  render() {  
    return (  
      <View style={styles.Main}>  
      <Text style={styles.welcome}>Who you are ?</Text> 
      <TouchableOpacity onPress={() => this.props.navigation.navigate('student')}   style={styles.Rectangle}>
      <Image  style = {{ width: 150, height: 145, alignSelf:'center' }} source = {require('../assets/Students.png')} />
     <Text style={{textAlign:'center', fontFamily: 'Montserrat-SemiBold',
     color:"#000",  fontSize: 15,   }}>Student</Text>
    </TouchableOpacity>  
    <TouchableOpacity onPress={() => this.props.navigation.navigate('subjectscreen')}   style={styles.Rectangle}>
      <Image  style = {{ width: 150, height: 140, alignSelf:'center' }} source = {require('../assets/Professor-amico.png')} />
      <Text style={{textAlign:'center', fontFamily: 'Montserrat-SemiBold',
     color:"#000",  fontSize: 15, marginTop:5   }}>Professor</Text>
      </TouchableOpacity> 
      </View>  
    );
  }  
} 
const styles = StyleSheet.create({  

    Main: {  
      alignItems:'center',
      padding:'20%',
      backgroundColor:"#fff",

      height:"100%"
      } , 

    welcome: {  
      fontSize: 20,   
      
      padding:"15%",
      fontFamily: 'Montserrat-SemiBold',
     color:"#000"
    } , 

    Rectangle:{
        width: 175,
        height: 175,
        margin:"12%",
        borderRadius:20,
        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
 },
  })