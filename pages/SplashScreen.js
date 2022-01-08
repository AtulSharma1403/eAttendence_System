// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

    
      navigation.replace("first"
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
    <View style={styles.text}>
      <Text style={{fontSize:23, fontFamily:"Montserrat-SemiBold",color:'#FEB252'}}>e
          <Text style={{color:'#02D2C5'}}>Attendence</Text>
     </Text>

      <Text style={{color:"#3C3C3C",fontSize:23, fontFamily:"Montserrat-SemiBold"}}>System</Text>
      </View>
      <Image  style = {{ width: 270, height: 270, alignSelf:'center' }} source = {require('../assets/attendence.jpg')} />
      <Text style={{color:'#3C3C3C', fontFamily:"Montserrat-Medium",fontSize:14,  marginVertical:40, lineHeight:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum suscipit maecenas.</Text>
      <ActivityIndicator
        animating={animating}
        color="#02D2C5"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:"18%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  text:{
    
    alignItems: 'center',
    marginVertical:20
  }
});