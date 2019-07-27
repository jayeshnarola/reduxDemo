/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, View, StatusBar, Dimensions, Platform } from 'react-native';
import App from './Src/App'
import { name as appName } from './app.json';
import { Colors } from './Src/Config';
import NetInfo from "@react-native-community/netinfo";
const { width, height } = Dimensions.get('window');
let screenHeight = width < height ? height : width
const MyStatusBar = ({ backgroundColor }) => (
    <View style={[Styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor}  />
    </View>
);

class DemoApp extends Component {
    constructor() {
        super()
        console.disableYellowBox = true;
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
      }
      componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
      }
      handleConnectivityChange = isConnected => {
        this.setState({ isConnected, hideNotice: false });
        global.isConnected = isConnected
        if (isConnected) {
        //connected
        }
      }
    render() {
        return (
            <View style={Styles.container}>
                <View style={{ backgroundColor: Colors.WHITE }}>
                    <MyStatusBar translucent backgroundColor={Colors.WHITE} barStyle="dark-content" />
                </View>
                <App />
            </View>
        );
    }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (screenHeight === 812 ? 44 : 20) : StatusBar.currentHeight;
const Styles = {
    container: {
        flex: 1
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
}
AppRegistry.registerComponent(appName, () => DemoApp);
