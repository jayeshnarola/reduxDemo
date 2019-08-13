// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Colors } from '../Config';
import { connect } from 'react-redux';
import { getUserRoleRequest, getCountryListRequest } from '../Redux/Actions'
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
            this.props.getCountryListRequest();
            this.props.getUserRoleRequest();
        }else{
            if(this.props.dataList.data.length > 0){
                await this.setState({empList:this.props.dataList.data,});
                await this.setState({showLoader:false})
            }
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps); 
        this.setState({empList:nextProps.dataList.data,showLoader:false});
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
                {/* <Loader visible={this.state.showLoader} /> */}
            </View>
        )
    }
}
const mapStateToProps = (res) => {
    console.log("Ressss",res);  
    return {
        dataList: res.GetDataList,
        contryList: res.GetCountryList
    };
}
export default connect(mapStateToProps, { getUserRoleRequest, getCountryListRequest })(EmployeeList);