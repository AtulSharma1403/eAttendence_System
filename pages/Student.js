import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler,Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import Select2 from "react-native-select-two"
import { RNCamera } from 'react-native-camera';
import moment from 'moment';
import BottomSheet from 'react-native-simple-bottom-sheet';
// import firebase from './firebase';
import styles from '../Scanstyle';
const Lecture= [
  
    { id: 'Big data and haddop', name: "Big data and haddop"  }, // set default checked for render option item
    { id: 'Internet of Things', name: "Internet of Things" },
    { id: 'Data Mining', name: "Data Mining" }
  ]
  const Time = [
    { id: "10.00 AM - 11.00 AM", name: "10.00 AM - 11.00 AM" }, // set default checked for render option item
    { id: '11.15 AM - 12.15', name: "11.15 AM - 12.15 PM" },
    { id: '12.30 AM - 1.30 PM', name: "12.30 PM - 1.30 PM" }
  ]
class Student extends Component {

  
    constructor(props) {
        super(props);
        this.state = {
            time:'',
            data: '',
            scan: false,
            ScanResult: false,
            result: null
        
          };
        }
       
    toggleTorch()
    {
        let tstate = this.state.torchon;
        if (tstate == RNCamera.Constants.FlashMode.off){
           tstate = RNCamera.Constants.FlashMode.torch;
        } else {
           tstate = RNCamera.Constants.FlashMode.off;
        }
        this.setState({torchon:tstate})
    }


onSuccess = (e) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
this.props.navigation.navigate('first')


        // this is code for acess json data object
      const myjson = e.data;
      const myobj = JSON.parse(myjson);
      const check = e.data.substring(0, 4);

      // convert array to string
      const lecturedata = this.state.data;
      const lecturetime = this.state.time;
      var LectureName = lecturedata.toString();
      var LectureTime= lecturetime.toString();
     
        // console.log('scanned data' , e.data);
        console.log('scanned data' ,myobj.name);
        console.log('scanned data' ,LectureTime);
        console.log('scanned data' ,LectureName);
        const d = new Date();
        // console.log("The current month is " + monthNames[d.getMonth()]);
        


        // // for date
        // var today = new Date(),
        // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        // // for time
        // var today = new Date(),
        // time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   
   
        this.state = {
          currentDate: moment().format('l'),
          currentTime: moment().format('LTS'),
          currentMonth: monthNames[d.getMonth()]
        }
       
      
        const data = {
            id:myobj.id,
            name: myobj.name,
            posttime:moment().format('ll'),
            Date:this.state.currentDate,
            Time:this.state.currentTime,
            Month:this.state.currentMonth,
            LectureName:LectureName,
            LectureTime:LectureTime
     
        };
   firestore()
    .collection('Users')
    .add(data)
    .then(() => {
        Alert.alert(
            "Attendence Marked",
              "Your Attendence Marked Sucessfully",
              [
                
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
    });

        this.setState({
            data:'',
            time:'',
            result: myobj,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
            Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } else {
            this.setState({
                result: myobj,
                scan: false,
                ScanResult: true
            })
        }
    }
activeQR = () => {
  if(this.state.data === '' && this.state.time=== '') {
    Alert.alert(
        "Select Input Field",
          "Select Lecture Date and Name",
          [
            
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
  } else {
        this.setState({ scan: true })
    }
  }

    scanAgain = () => {
     
    }
render() {
        const { scan, ScanResult, result , data} = this.state

        return (
    
            
                <View style={{flex:1, backgroundColor:"#fff"}}>
      <View>
      <Fragment>
                    <View style={styles.header}>
               
                        {/* <TouchableOpacity  onPress={() => this.props.navigation.goBack()} >
                            <Image source={require('../assets/1200.png')} style={{height: 36, width: 36,}}></Image>
                        </TouchableOpacity> */}
                        <Text style={styles.textTitle}>Mark Your Attendence</Text>
                     
                    </View>
                    {!scan && !ScanResult &&
                        <View style={styles.cardView} >
                            
                            {/* <Image source={require('./assets/1200.png')} style={{height: 36, width: 36}}></Image> */}
                            <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
                            {/* <Image source={require('./assets/1200.png')} style={{margin: 20}}></Image> */}
                            <TouchableOpacity onPress={this.activeQR}>
                            <Image  style = {{ width: 150, height: 145, alignSelf:'center',marginBottom:10 }} source = {require('../assets/qr-code.png')} />
                                <View >
                                {/* <Image source={require('./assets/1200.png')} style={{height: 36, width: 36}}></Image> */}
                                
                                <Text style={styles.buttonScan}>Scan QR Code</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <Text style={{color:'#3C3C3C', fontFamily:"Montserrat-Medium",fontSize:14,  textAlign:"center",  marginVertical:10, lineHeight:20,  padding:25,}}>If any issue occur during Scaning QR code Please contact your
Administration</Text>
                        </View>
                    }
                    {/* {ScanResult &&
                        <Fragment>
                            <Text style={styles.textTitle1}>Result</Text>
                            <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.name}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={this.scanAgain} style={styles.buttonScan}>
                                    <View style={styles.buttonWrapper}>
                                        <Image source={require('../assets/1200.png')} style={{height: 36, width: 36}}></Image>
                                        <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                    } */}
                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            customMarker={    <Image  style = {{ width: 225, height: 225, alignSelf:'center',marginBottom:10 }} source = {require('../assets/qrcodes.png')} />}
                            flashMode={this.state.torchon}
                            cameraStyle={{ height: 530,}}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            // topContent={
                            //     <Text style={styles.centerText}>
                            //        Please move your camera {"\n"} over the QR Code
                            //     </Text>
                            // }
                            bottomContent={
                              
                                <View style={{alignItems:'center', marginTop:'20%'}}>
                                        <TouchableOpacity style={{}}  onPress={() => this.toggleTorch() }>
{ this.state.torchon == RNCamera.Constants.FlashMode.torch? (
        <Image style={{width:45,height:45}} source={require('../assets/torch.png')} />
    ) : (
        <Image style={{width:45,height:45}} source={require('../assets/torch-off.png')} />
    )
}
</TouchableOpacity>
                                        <TouchableOpacity 
                                            onPress={() => this.setState({ scan: false })}>
                                           <Text style={{fontSize:15,  fontFamily: 'Montserrat-Medium', color:'black'}}>Go back to QR Screen</Text>
                                        </TouchableOpacity>
                                  
                              
                                </View>
                            }
                        />
                    }
                </Fragment>
      </View>
      <BottomSheet isOpen>
      <View>
      <Select2
                                    isSelectSingle
                                    
                                    style={{borderColor:"#02D2C5",borderWidth:1.5, borderRadius:10,marginBottom:30}}
                                    defaultFontName={"Montserrat-Medium"}
                                    selectedTitleStyle={{color:"#3c3c3c", fontSize:15,  fontFamily:"Montserrat-Medium"}}
                                    showSearchBox={false}
                                    colorTheme="#02D2C5"
                                    selectButtonText={"Select"}
                                    cancelButtonText={"Cancel"}
                                    popupTitle="Select item"
                                    title="Select lecture"
                                    data={Lecture}
                                      onSelect={data => {
                                        this.setState({ data})
                                      }}
                                      onRemoveItem={data => {
                                        this.setState({ data })
                                      }}
                                      
                                
                                    />
                                     {/* <Text style={styles.textStyle}> {this.state.data}</Text>   */}
                                </View>

                                <View>
                                <Select2
                                    isSelectSingle
                                    style={{borderColor:"#02D2C5",borderWidth:1.5, borderRadius:10,marginBottom:30}}
                                    defaultFontName={"Montserrat-Medium"}
                                    selectedTitleStyle={{color:"#3c3c3c", fontSize:15,  fontFamily:"Montserrat-Medium"}}
                                    showSearchBox={false}
                                    colorTheme="#02D2C5"
                                    selectButtonText={"Select"}
                                    cancelButtonText={"Cancel"}
                                    popupTitle="Select item"
                                    title="Select Time"
                                    data={Time}
                                      onSelect={time => {
                                        this.setState({ time})
                                      }}
                                      onRemoveItem={time => {
                                        this.setState({ time })
                                      }}
                                
                                    />
                                  
                                     {/* <Text style={styles.textStyle}> {this.state.time}</Text>   */}
                                </View>
        <View />
      </BottomSheet>
    </View>
           

            
        );
    }
}

export default Student;

