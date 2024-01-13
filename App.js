
import React from 'react';
import LoginScreen from './src/screens/LogIn/LoginScreen';
import DashboardScreen from './src/screens/Dashboard/DashboardScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import SignUpScreen from './src/screens/Signup/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from "./src/Store"
EStyleSheet.build();

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LogIn' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
    </>
  );
};

export default App;
