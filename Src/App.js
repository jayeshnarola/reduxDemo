/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import {store, persistor } from '../Src/Redux/store';
import AppNavigation from './AppNavigation';
import { PersistGate } from 'redux-persist/integration/react';  
//Used from redux-persist library .
//This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux

const App = () => {
  console.disableYellowBox = true
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </Fragment>
    );
};
export default App;
