import dashboardSaga from './GetDataSaga'

//Main Root Saga
const rootSaga = function* rootSaga() {
    yield dashboardSaga()

  };
  export default rootSaga;