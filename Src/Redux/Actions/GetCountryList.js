import { GET_COUNTRY_LIST_REQUEST } from '../Types/types'


export const getCountryListRequest = () => {
    console.log("Action called");
    
    return {
        type: GET_COUNTRY_LIST_REQUEST
    };
}
