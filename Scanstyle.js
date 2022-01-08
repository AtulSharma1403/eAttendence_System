import React, { Component } from 'react'
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = {
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
   
    header: {
        // display: 'flex',
        // flexDirection: 'row',
        textAlign:"center",
        marginTop:20,
        marginBottom:20,
        // paddingLeft: 10,
    
        width: deviceWidth,
    },
    textTitle: {
    

        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        
    },
    textTitle1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'white'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      },
    cardView: {
        width: deviceWidth - 32,
        height: deviceHeight - 400,
        alignSelf: 'center',
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,

        backgroundColor: 'white'
    },
    scanCardView: {
        width: deviceWidth - 32,
        height: deviceHeight / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'white'
    },
    buttonWrapper: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center'
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
    buttonScan2: {
        marginLeft: deviceWidth / 2 - 50,
        width: 100,
        height: 100,
    },
    descText: {
        padding: "10%",
        textAlign: 'center',
        lineHeight:20,
        fontSize: 16,
        color:"#3c3c3c",
        fontFamily: 'Montserrat-Medium',
    },
    highlight: {
        fontWeight: '700',
    },
    centerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        padding: 32,
        color: 'black',
        marginBottom:10,
        fontFamily: 'Montserrat-Medium',

    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    bottomContent: {
       width: deviceWidth,
       height: 120,
    },
    buttonTouchable: {
        fontSize: 21,
        backgroundColor: 'white',
        marginTop: 32,
        width: deviceWidth - 62,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    buttonTextStyle: {
        color: 'black',
        fontWeight: 'bold',
    }
}
export default styles;