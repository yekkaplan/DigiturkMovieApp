/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import MovieDetail from '../screens/move-detail';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'En iyi Filmler!'}}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}
export default MyStack;
