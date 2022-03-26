import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomePage from './HomePage'
import ResultPage from './ResultPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageBaru from './PageBaru';

const Stack = createNativeStackNavigator();

// let x;
// x.toString();

function HomePageD() {
  return (
      <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="PageBaru" component={PageBaru}/>
        <Stack.Screen name="ResultPage" component={ResultPage}/>
      </Stack.Navigator>
  );
}

export default HomePageD;

