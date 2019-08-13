import { GET_COUNTRY_LIST_SUCCESS, GET_COUNTRY_LIST_FAILED } from '../Types/types';


const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    console.log("GetCountrylist reducer",action.payload);
    
    switch (action.type) {
        
        case GET_COUNTRY_LIST_SUCCESS:
            return { getCountryListSuccess: true, data: action.payload }

        case GET_COUNTRY_LIST_FAILED:
            return { isRequestFailed: true, data: action.payload }
        
        default:
            return state;
    }
}