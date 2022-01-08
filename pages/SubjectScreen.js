import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';  
import {Card} from 'react-native-shadow-cards';
export default class SubjectScreen extends Component {  
  render() {  
    const { navigate } = this.props.navigation;
    return (  
        <View style={{alignItems:'center', backgroundColor:'#fff', height:"120%"}}>
                 <Text style={styles.welcome}>Select Your Subject</Text> 
    <TouchableOpacity style={{padding: 15,  backgroundColor:"#fff", width:'90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, borderRadius: 10, alignItems:'center', marginVertical: 10,  borderColor:'#02D2C5', borderWidth:1}}   onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('professor', {
          otherParam: 'Big data and haddop',
          }
          
            
          
          
          )
        }}>
      
    
    <View style={{ flexDirection: 'row', alignItems:'center'}}>
      <View style={{paddingRight:15}}>
      <Image
           style={{width: 80, height: 80, borderRadius:50,marginRight:10}}
           source={require('../assets/BDH.jpg')}
     />
      </View>
      <View style={{width:'68%'}}>
      <Text style={{fontFamily: 'Montserrat-SemiBold',
     color:"#000",  fontSize: 15, lineHeight:25   }}> 
      Big Data and Haddop</Text>
    <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontFamily: 'Montserrat-Medium',
     color:"#000",  fontSize: 13, lineHeight:25   }}> 
     Prashant Sharma</Text>
 
      </View>

       </View>
    
    </TouchableOpacity>
    <TouchableOpacity style={{padding: 10,  backgroundColor:"#fff",width:'90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, borderRadius: 10, alignItems:'center', marginVertical: 10,  borderColor:'#02D2C5', borderWidth:1}}   onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('professor', {
          otherParam: 'Internet of Things',
          }
         )
        }}>
    
    <View style={{ flexDirection: 'row', alignItems:'center'}}>
      <View style={{paddingRight:15}}>
      <Image
           style={{width: 80, height: 80, borderRadius:50,marginRight:10}}
           source={require('../assets/download.jpg')}
     />
      </View>
      <View style={{width:'68%'}}>
      <Text style={{fontFamily: 'Montserrat-SemiBold',
     color:"#000",  fontSize: 15, lineHeight:25   }}> 
      Internet of Things</Text>
    <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontFamily: 'Montserrat-Medium',
     color:"#000",  fontSize: 13, lineHeight:25   }}> 
     Ajitabh Sir</Text>
 
      </View>

       </View>
      
    </TouchableOpacity>
    <TouchableOpacity style={{padding: 10,   backgroundColor:"#fff",width:'90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,borderRadius: 10, alignItems:'center', marginVertical: 10,  borderColor:'#02D2C5', borderWidth:1}}   onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('professor', {
          otherParam: 'Data Mining',
          } )
    }}>
    
    <View style={{ flexDirection: 'row', alignItems:'center'}}>
      <View style={{paddingRight:15}}>
      <Image
           style={{width: 80, height: 80, borderRadius:50,marginRight:10}}
           source={require('../assets/images.jpg')}
     />
      </View>
      <View style={{width:'68%'}}>
      <Text style={{fontFamily: 'Montserrat-SemiBold',
     color:"#000",  fontSize: 15, lineHeight:25   }}> 
      Data Mining & Warehouse</Text>
    <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontFamily: 'Montserrat-Medium',
     color:"#000",  fontSize: 13, lineHeight:25   }}> 
     Neha Sharma</Text>
 
      </View>

       </View>
       
    </TouchableOpacity>
      
      
      
      </View> 
    );  
  }  
}  
const styles = StyleSheet.create({  
    welcome: {  
        fontSize: 20,   
        
        padding:"15%",
        fontFamily: 'Montserrat-SemiBold',
       color:"#000"
      } , 
  
});