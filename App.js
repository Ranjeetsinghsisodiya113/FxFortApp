// App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import CreateOrder from './src/CreateOrder';
import OrderList from './src/OrderList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}}/>
        <Stack.Screen name="CreateOrder" component={CreateOrder} options={{ headerShown: false,}}/>
        <Stack.Screen name="OrderList" component={OrderList} options={{ headerShown: false,}}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

