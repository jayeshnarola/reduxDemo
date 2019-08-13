import dashboardSaga from './GetDataSaga'
import countryListSaga from './GetCountryList';

//Main Root Saga
const rootSaga = function* rootSaga() {

  //When Saga is Single then you can call like this
  //yield countryListSaga()
  //if sagas are multiple then you can call like this
    yield* dashboardSaga(),
    yield* countryListSaga()
    
  };
  export default rootSaga;