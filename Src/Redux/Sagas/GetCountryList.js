import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_COUNTRY_LIST_FAILED, GET_COUNTRY_LIST_REQUEST, GET_COUNTRY_LIST_SUCCESS } from '../Types/types'
import Api from '../../Services/api';

export const asyncSaga = function* asyncSaga() {
    try {
        console.log('---------------SAGA CALLING AVAILABILITY')
        const response = yield call(Api.getCountryList)
        console.log("SAGA RESPONSE",response);
        yield put({ type: GET_COUNTRY_LIST_SUCCESS, payload: response });
    }
    catch (e) {
        console.log(e, 'error');
        yield put({ type: GET_COUNTRY_LIST_FAILED, payload: e });
    }
}


export function* countryListSaga(){
    console.log("CountryList saga called");
    
    yield takeEvery(GET_COUNTRY_LIST_REQUEST, asyncSaga);
}
export default countryListSaga;