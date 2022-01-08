import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './pages/First';
import SecondPage from './pages/Student';
import Student from './pages/Student';
import Professor from './pages/Professor';
import SplashScreen from './pages/SplashScreen';
import SubjectScreen from './pages/SubjectScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff"/>
          <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen options={{
    headerShown: false
}}  name="first" component={FirstPage} />
        <Stack.Screen options={{
    headerShown: false
}} name="student" component={Student} />
 
        <Stack.Screen options={{
    headerShown: false
}} name="professor" component={Professor} />
 <Stack.Screen options={{
    headerShown: false
}} name="subjectscreen" component={SubjectScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;

// import React, { Component, Fragment } from 'react';
// import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import firestore from '@react-native-firebase/firestore';
// // import firebase from './firebase';
// import styles from './Scanstyle'
// class Scan extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             scan: false,
//             ScanResult: false,
//             result: null
//         };
//     }



// onSuccess = (e) => {

//         // this is code for acess json data object
//       const myjson = e.data;
//       const myobj = JSON.parse(myjson);
  

//         const check = e.data.substring(0, 4);
//         // console.log('scanned data' , e.data);
//         console.log('scanned data' ,myobj.name);


//         // for date
//         var today = new Date(),
//         date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

//         // for time
//         var today = new Date(),
//         time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   
   
//         this.state = {
//           currentDate: date,
//           currentTime: time
//         }
       
      
//         const data = {
//             id:myobj.id,
//             name: myobj.name,
//             posttime:firestore.FieldValue.serverTimestamp(),
//             Date:this.state.currentDate,
//             Time:this.state.currentTime,
         
//         };
//    firestore()
//     .collection('Users')
//     .add(data)
//     .then(() => {
//       console.log('User added!');
//     });

//         this.setState({
//             result: e,
//             scan: false,
//             ScanResult: true
//         })
//         if (check === 'http') {
//             Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//         } else {
//             this.setState({
//                 result: e,
//                 scan: false,
//                 ScanResult: true
//             })
//         }
//     }
// activeQR = () => {
//         this.setState({ scan: true })
//     }
//     scanAgain = () => {
     
//     }
// render() {
//         const { scan, ScanResult, result } = this.state
//         return (
//             <View style={styles.scrollViewStyle}>
//                 <Fragment>
//                     <View style={styles.header}>
               
//                         <TouchableOpacity onPress={()=> BackHandler.exitApp()}>
//                             <Image source={require('./assets/1200.png')} style={{height: 36, width: 36}}></Image>
//                         </TouchableOpacity>
//                         <Text style={styles.textTitle}>Scan QR Code</Text>
//                     </View>
//                     {!scan && !ScanResult &&
//                         <View style={styles.cardView} >
//                             {/* <Image source={require('./assets/1200.png')} style={{height: 36, width: 36}}></Image> */}
//                             <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
//                             {/* <Image source={require('./assets/1200.png')} style={{margin: 20}}></Image> */}
//                             <TouchableOpacity onPress={this.activeQR} style={styles.buttonScan}>
//                                 <View style={styles.buttonWrapper}>
//                                 {/* <Image source={require('./assets/1200.png')} style={{height: 36, width: 36}}></Image> */}
//                                 <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                     }
//                     {ScanResult &&
//                         <Fragment>
//                             <Text style={styles.textTitle1}>Result</Text>
//                             <View style={ScanResult ? styles.scanCardView : styles.cardView}>
//                                 <Text>Type : {result.type}</Text>
//                                 <Text>Result : {result.data}</Text>
//                                 <Text numberOfLines={1}>RawData: {result.rawData}</Text>
//                                 <TouchableOpacity onPress={this.scanAgain} style={styles.buttonScan}>
//                                     <View style={styles.buttonWrapper}>
//                                         <Image source={require('./assets/1200.png')} style={{height: 36, width: 36}}></Image>
//                                         <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
//                                     </View>
//                                 </TouchableOpacity>
//                             </View>
//                         </Fragment>
//                     }
//                     {scan &&
//                         <QRCodeScanner
//                             reactivate={true}
//                             showMarker={true}
//                             ref={(node) => { this.scanner = node }}
//                             onRead={this.onSuccess}
//                             topContent={
//                                 <Text style={styles.centerText}>
//                                    Please move your camera {"\n"} over the QR Code
//                                 </Text>
//                             }
//                             bottomContent={
//                                 <View>
//                                     {/* <ImageBackground source={require('./assets/1200.png')} style={styles.bottomContent}>
//                                         <TouchableOpacity style={styles.buttonScan2} 
//                                             onPress={() => this.scanner.reactivate()} 
//                                             onLongPress={() => this.setState({ scan: false })}>
//                                             <Image source={require('./assets/1200.png')}></Image>
//                                         </TouchableOpacity>
//                                     </ImageBackground> */}
//                                 </View>
//                             }
//                         />
//                     }
//                 </Fragment>
//             </View>
//         );
//     }
// }
// export default Scan;
// import React, {Component} from 'react';  
// import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';  

// import firestore from '@react-native-firebase/firestore';
// export default class App extends Component {  

//   passdata = () => {
     
//    firestore()
//      .collection('Users')
//      .add({
//        name: 'Ada Lovelace',
//        age: 30,
//      })
//      .then(() => {
//        console.log('User added!');
//      });
//      }
//   render() {  
    
//     return (  
//       <View>  
//         <TouchableOpacity onPress={this.passdata}>
//         <Text>Click to scan again</Text>
//         </TouchableOpacity>
//         <Text>Hello World</Text>  
//       </View>  
//     );  
//   }  
// }  