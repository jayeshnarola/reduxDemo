import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 'somethun',
      title: 'Quick setup, good defaults',
      text:
        'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
      icon: 'ios-images-outline',
      colors: ['#63E2FF', '#B066FE'],
    },
    {
      key: 'somethun1',
      title: 'Super customizable',
      text:
        'The component is also super customizable, so you can adapt it to cover your needs and wants.',
      icon: 'ios-options-outline',
      colors: ['#A3A1FF', '#3A3897'],
    },
    {
      key: 'somethun2',
      title: 'No need to buy me beer',
      text: 'Usage is all free',
      icon: 'ios-beer-outline',
      colors: ['#29ABE2', '#4F00BC'],
    },
  ];
  
class Slider extends Component{
    _renderItem=(item)=>{
        console.log(item);
        return(
            <View>
                <Text>S</Text>
            </View>
        )
        // alert(item)
        // return(
        // <View style={{flex:1,justifyContent:'center'}}>  
        //     <Text style={Styles.title}>{item.title}</Text>
        // <Image source={item.image} />
        // <Text style={Styles.text}>{item.text}</Text>
        // </View>
        // )
    }
    render(){
        return(
            <AppIntroSlider slides={slides} renderItem={()=>this._renderItem} bottomButton />
        )
    }
}
const Styles = {
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      image: {
        width: 320,
        height: 320,
      },
      text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
      },
      title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
      },
}
export default Slider