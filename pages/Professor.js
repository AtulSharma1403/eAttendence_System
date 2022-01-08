// // import React, {Component} from 'react';  
// // import {Platform, StyleSheet, Text, View} from 'react-native';  

// // export default class Professor extends Component {  
// //   render() {  
// //     const { navigate } = this.props.navigation;
// //     return (  
// //       <View>  
// //         <Text>Professor</Text>  
// //       </View>  
// //     );  
// //   }  
// // }  
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Aug from '../AttendenceScreen/Aug';
// import Sep from '../AttendenceScreen/Sep';
// import Oct from '../AttendenceScreen/Oct';
// import Nov from '../AttendenceScreen/Nov';
// import Dec from '../AttendenceScreen/Dec';

// const Tab = createMaterialTopTabNavigator();

// function Professor(props) {
//   const params = props.route.params;
//   return (
 

      
//       <Tab.Navigator>
//         <Tab.Screen name="Aug" component={Aug} initialParams={params} />
//         <Tab.Screen name="Sep" component={Sep}initialParams={params} />
//         <Tab.Screen name="Oct" component={Oct} initialParams={params} />
//         <Tab.Screen name="Nov" component={Nov}initialParams={params} />
//         <Tab.Screen name="Dec" component={Dec} initialParams={params} />
//       </Tab.Navigator>
    
  
//   );
// }
// export default Professor;

import React, { useEffect, useState } from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {Platform, StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Image,Alert, ActivityIndicator} from 'react-native'; 
import DatePicker from 'react-native-date-picker' 
import firestore from '@react-native-firebase/firestore';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from "moment";
export function Professor({ route, navigation }){
  const { itemId, otherParam } = route.params;  
  const [open, setOpen] = useState(false)
  // const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [isLoading, setLoading] = useState(true);
 
  const EmptyListMessage = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.emptyListStyle}
        onPress={() => getItem(item)}>
        No Attendence Marked
      </Text>
    );
  };

const hidedatepicker = () =>{
  setIsPickerShow(false);
} ;

  const showPicker = () => {
    setIsPickerShow(true);
  };
  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0.7,
              width: '92%',
              backgroundColor: '#C8C8C8',
              marginHorizontal:15,
           marginTop:15
          }}
      />
    );
  };
  
  const ItemView = ({item}) => {
    return (
      // FlatList Item
  <TouchableOpacity
  >
     <View style={{ flexDirection: 'row', alignItems:'center', marginHorizontal:15, marginTop:15}}>
      <View style={{paddingRight:15}}>
      <Image
           style={{width: 70, height: 70, borderRadius:50,marginRight:10}}
           source={require('../assets/BDH.jpg')}
     />
      </View>
      <View style={{width:'80%'}}>
      <Text numberOfLines={3} ellipsizeMode="tail" style={{marginVertical:2,  marginLeft:'7%', fontFamily:'Montserrat-SemiBold', fontSize:16,lineHeight:19,color:'#000', fontWeight:'600'}}> 
      Name :  {item.name}</Text>
    <Text numberOfLines={3} ellipsizeMode="tail" style={{ marginVertical:2, marginLeft:'7%', fontFamily:'Montserrat-Medium', fontSize:13,lineHeight:19,color:'#000', fontWeight:'600'}}> 
      Enrollment : {item.id}</Text>
     
      <Text numberOfLines={3} ellipsizeMode="tail" style={{ marginVertical:2, marginLeft:'7%', fontFamily:'Montserrat-Medium', fontSize:13,lineHeight:19,color:'#000', fontWeight:'600'}}> 
       Marked at : {item.posttime}, {item.Time}</Text>
  
      </View>

       </View>
       </TouchableOpacity>
    );
  };


  const onChange = (event, value) => {
  
    setDate(value);
    setIsPickerShow(false);
    setLoading(true);
   
   
    console.log("A date has been picked: ", value);

    

  };

  const handleConfirm = (value) => {
  
    // this the way to use moment to convert datepicker date
 var datestring = moment(date).format('l');
 console.log("A date: ", datestring);
  const users  = [];
  firestore()
  .collection('Users')
  .where('Date', '==', datestring ) 
  .where('LectureName', '==', otherParam)
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(res => {
      users.push({...res.data(),key:res.id,});
    });
  }).then(testing=>{
    console.log('New Array Push is =', users);
    setUsers(users);
    setLoading(false);
  });
  





};


    return (  
  
      <View style={styles.container}>
      {/* Display the selected date */}
      <Text style={styles.textTitle}>Attendence</Text>
      {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
   
   
      {/* The button that used to trigger the date picker */}
     
        <View style={styles.btnContainer}>
     
          <TouchableOpacity style={{width:150,flexDirection:'row' ,borderColor:"#02D2C5",borderWidth:2, borderRadius:10,alignItems:'center', padding:10, marginBottom:10, alignSelf:'center'}}  onPress={() => setOpen(true)}>
          <Image
           style={{width: 25, height:25, borderRadius:5, marginRight:10}}
           source={require('../assets/calendar1.png')}
     />
            <Text style={{fontFamily:"Montserrat-SemiBold", color:"#000"}}>{moment(date).format('ll')}</Text>
         
           </TouchableOpacity>
           <TouchableOpacity onPress={handleConfirm}>
           <Text style={styles.buttonScan}>Get Attendence</Text>
           </TouchableOpacity>
           
    
        </View>
      
  
      {/* The date picker */}
     
         <DatePicker
         modal
         open={open}
         maximumDate={new Date(Date.now())}
         
         mode="date"
         date={date}
         onConfirm={(date) => {
           setOpen(false)
           setDate(date)
           setLoading(true);
          //  console.log("A date has been picked: ", date);
         }}
         onCancel={() => {
           setOpen(false)
         }}
       />
    
      
<View>
 

{isLoading ? <Text style={styles.Attendences}>Press Get Attendence</Text> :
     (  <FlatList
        ListHeaderComponent={<Text style={styles.Attendence}>Total Attendence : {users.length}</Text>}
        data={users}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListEmptyComponent={EmptyListMessage}
      />
     )}
  </View> 

      
      
    </View>
    );  
  }  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      flex: 1,
      // justifyContent: 'center',
      // padding: 50,
      backgroundColor:"#fff"
    },
    pickedDateContainer: {
      padding: 20,
      backgroundColor: '#eee',
      borderRadius: 10,
    },
    pickedDate: {
      fontSize: 18,
      color: 'black',
    },
    buttonScan: {
                
      paddingRight:20,
      paddingLeft:20,
  borderRadius: 100,
  backgroundColor:"#02D2C5",
  // borderColor: '#02D2C5',
  // paddingTop: 7,
  // paddingRight: 2,
  // paddingBottom: 5,
  // paddingLeft: 19,
  alignSelf:'center',
padding:"3%",
  marginTop: 20,
  color:"#fff",
  fontFamily: 'Montserrat-SemiBold',

},
emptyListStyle: {
  
  fontSize: 16,
  textAlign: 'center',
  fontFamily: 'Montserrat-SemiBold',
  
},
    btnContainer: {
      padding: 25,
    },
    // This only works on iOS
    datePicker: {
      width: 320,
      height: 260,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    textTitle: {
    
      marginTop:25,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 20,
      textAlign: 'center',
      color: '#000',
      
  },
  Attendence: {
    
    marginVertical:13,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    
},
Attendences: {
    
  marginTop:2,
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 14,
  textAlign: 'center',
  color: '#000',
  
},
  });
  

export default Professor;
