// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>
import React, { Component } from 'react';
import { View, Modal, Image,Dimensions, Platform, StatusBar } from 'react-native';
import { Colors, Images, ApplicationStyles } from '../Config';
// var Spinner = require('react-native-spinkit');

// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>

class Loader extends Component{
    componentWillMount(){
        const { width, height } = Dimensions.get('window');
        let screenHeight = width < height ? height : width
        this.STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (screenHeight === 812 ? 44 : 20) : StatusBar.currentHeight;
        this.height = ApplicationStyles.headerHeight + this.STATUSBAR_HEIGHT  
    }
    render(){
        return(
            <Modal  visible={this.props.visible} transparent={true} >
                <View style={Styles.mainSpinnerView}>
                    {/* <Spinner style={Styles.spinner} isVisible={true} size={50} type={'Circle'}/>    */}
                    <View style={{flex:0.25,justifyContent:'center',backgroundColor:'transparent'}}>
                        <Image style={{height:30,width:550,alignSelf:'center',backgroundColor:'transparent'}}  resizeMode={'contain'}  source={Images.Loader} />
                    </View>
                </View>
            </Modal>
        )
    }
}
// <<<<<<<<<<<<----------- StylesHEET ----------->>>>>>>>>>>>>
const Styles = {
    mainSpinnerView:{
        flex:1,
        // alignSelf:'center',
        // alignItems:'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        // elevation: 20,
        // marginTop:this.STATUSBAR_HEIGHT
    },
    spinner:{
        justifyContent:'center', alignItems:'center',alignSelf:'center',color:Colors.APPCOLOR
    }
}
export default Loader