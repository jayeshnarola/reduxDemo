// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ApplicationStyles, Colors } from '../Config';
import { connect } from 'react-redux';
import { getUserRoleRequest } from '../Redux/Actions'
import Loader from '../Components/loader';

// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>
class EmployeeList extends Component{
    state={
        empList:[],
        showLoader:false
    }
    async componentWillMount(){
        await this.setState({showLoader:true})
        this.props.getUserRoleRequest();
        await console.log(this.props);
        await this.setState({empList:this.props.response.data,});
        
        if(this.state.empList.length > 0){
            await this.setState({showLoader:false})
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