import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import configureStore from './app/configureStore';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from './app/utils/RootNavigation';
import MyStack from './app/containers/App';

const initialState = {};
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <MyStack />
    </NavigationContainer>
  </Provider>
);

export default App;
