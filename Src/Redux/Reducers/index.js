//LIBRARIES
// import { combineReducers } from 'redux';

//ASSETS
import GetDataReducer from './GetDataReducer';
import GetCountryReducer from './GetCounrtyListReducer';

let rootReducer = ({
    GetDataList: GetDataReducer,
    GetCountryList : GetCountryReducer
  });
  export default rootReducer