// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Colors } from '../Config';
import { connect } from 'react-redux';
import { getUserRoleRequest } from '../Redux/Actions'
import Loader from '../Components/loader';
import AsyncStorage from '@react-native-community/async-storage';
// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>
class EmployeeList extends Component{
    state={
        empList:[],
        showLoader:false
    }
    async componentWillMount(){
        // AsyncStorage.clear();
        await AsyncStorage.getItem('IsLogin').then(async data=>{
            await console.log("data found",data);
        })
        if(global.isConnected){
            await this.setState({showLoader:true})
            this.props.getUserRoleRequest();
        }else{
            if(this.props.response.data.length > 0){
                await this.setState({empList:this.props.response.data,});
                await this.setState({showLoader:false})
            }
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps.response.data); 
        this.setState({empList:nextProps.response.data,showLoader:false});
    }
    renderHeader(){
        return(
            <View style={{height:ApplicationStyles.headerHeight,backgroundColor:Colors.APPCOLOR,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20}}>Employee List</Text>
                <TouchableOpacity onPress={()=>AsyncStorage.removeItem('persist:root')} style={{height:30,width:80,alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:'pink',borderRadius:15}}>
                   <Text>Logout</Text> 
                </TouchableOpacity>
            </View>
        )
    }
    renderItem(item){
        return(
            <View style={{flex:0.2}}>
                <Text>{item.employee_name}</Text>
            </View>
        )
    }
    // <<<<<<<<<<<<----------- RENDER METHOD ----------->>>>>>>>>>>>>
    render(){
        console.log(this.props);
        console.log("connectibivy",global.isConnected);
        
        return(
            <View style={{flex:1}}>
                {this.renderHeader()}
                <View style={{flex:1,}}>
                <FlatList
                    data={this.state.empList}
                    extraData={this.state}
                    renderItem={({item}) => this.renderItem(item)}
                    />
                </View>
                <Loader visible={this.state.showLoader} />
            </View>
        )
    }
}
const mapStateToProps = (res) => {
    // console.log("Ressss",res);
    
    return {
        response: res.GetDataList
    };
}
export default connect(mapStateToProps, { getUserRoleRequest })(EmployeeList);