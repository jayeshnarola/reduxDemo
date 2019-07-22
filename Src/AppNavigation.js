import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from  './Screens/Login';
import EmployeeList from  './Screens/EmployeeList';


const AppNavigator = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions:{
        header:null
      }
    },
    EmployeeList: {
      screen: EmployeeList,
      navigationOptions:{
        header:null
      }
    },
  },
  {
      initialRouteName:'Login'
  }
  );
  
  export default createAppContainer(AppNavigator);