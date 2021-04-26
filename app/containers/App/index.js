import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import PhoneVerification from '../PhoneVerification';
import CodeVerification from '../CodeVerification';
import Login from '../Login';
import Registration from '../Registration';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions=
      {{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MyStack;
