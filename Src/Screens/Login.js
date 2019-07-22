// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import { Colors, Matrics, Images } from '../Config';
import Loader from '../Components/loader';
import { StackActions, NavigationActions } from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var FloatingLabel = require('react-native-floating-labels');


// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>
class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: 'john@gmail.com',
            password: 'XXXXXXXX',
            showLoader: false
        };
    }

    onBlur() {
        console.log('#####: onBlur');
    }
    onLogin() {
        // this.setState({ showLoader: true })
        setTimeout(() => {
            this.setState({ showLoader: false })
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: "EmployeeList"})
                ],
                key: null // THIS LINE
              });
              this.props.navigation.dispatch(resetAction);
        }, 2000);
    }
    // <<<<<<<<<<<<----------- RENDER METHOD ----------->>>>>>>>>>>>>
    render() {
        return (
            <View style={Styles.mainView}>
                {/* <ImageBackground style={{height:'100%',width:'100%'}} source={{uri:'https://i.pinimg.com/736x/c3/a3/bb/c3a3bb1aa1fe9d2562ea017dd0ec7430--custom-bookmarks-memorial-cards.jpg'}}> */}
                <KeyboardAwareScrollView contentContainerStyle={Styles.mainView} enableOnAndroid={true} enableAutomaticScroll={(Platform.OS === 'ios')} >
                    <View style={Styles.logoView}>
                        <Image style={Styles.logoImage} source={Images.AppLogo} />
                    </View>
                    <View style={Styles.labelView}>
                        <FloatingLabel
                            labelStyle={{ color: Colors.APPCOLOR, }}
                            inputStyle={{ borderWidth: 0, fontSize: 15 }}
                            style={Styles.labels}
                            value={this.state.email}
                            onBlur={this.onBlur}
                        >Email</FloatingLabel>
                        <FloatingLabel
                            labelStyle={{ color: Colors.APPCOLOR, }}
                            inputStyle={{ borderWidth: 0, fontSize: 15 }}
                            style={Styles.labels}
                            password={true}
                            value={this.state.password}
                            onBlur={this.onBlur}
                        >Password</FloatingLabel>

                    </View>
                    <View style={Styles.buttonsView}>
                        <View style={Styles.loginView}>
                            <TouchableOpacity style={Styles.loginButtonView} onPress={() => this.onLogin()}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.signupView}>
                            <TouchableOpacity style={Styles.signupButtonView} >
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Loader visible={this.state.showLoader} />
                </KeyboardAwareScrollView>
                {/* </ImageBackground> */}
            </View>
        )
    }
}
// <<<<<<<<<<<<----------- STYLESHEET ----------->>>>>>>>>>>>>
const Styles = {
    mainView: {
        flex: 1
    },
    logoView: {
        flex: 0.4, justifyContent: 'center', alignItems: 'center'
    },
    labelView: {
        flex: 0.35, justifyContent: 'center'
    },
    logoImage: {
        height: Matrics.ScaleValue(180), width: Matrics.ScaleValue(180), tintColor: Colors.APPCOLOR
    },
    labels: {
        borderBottomWidth: 1.5,
        marginLeft: Matrics.ScaleValue(20),
        borderColor: Colors.BORDERCOLOR
    },
    buttonsView: {
        flex: 0.25, justifyContent: 'center'
    },
    loginButtonView: {
        height: Matrics.ScaleValue(45), width: '90%', borderRadius: 25, borderWidth: 1, borderColor: Colors.APPCOLOR, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    },
    signupButtonView: {
        height: Matrics.ScaleValue(45), width: '90%', borderRadius: 25, borderWidth: 1, borderColor: Colors.APPCOLOR, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    },
    loginView: {
        flex: 0.5, justifyContent: 'flex-end'
    },
    signupView: {
        flex: 0.5, justifyContent: 'center'
    }
}
const mapStateToProps = (state) => {

    return {
        response: state.GetDataList
    };
}
export default Login;