import React from 'react';
import PesananSayaLand from './pesanan/PesananSayaLand'
import PesananSayaDetail from './pesanan/PesananSayaDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function PesananSaya() {
  return (
      <Stack.Navigator initialRouteName='PesananSayaLand' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PesananSayaLand" component={PesananSayaLand}/>
        <Stack.Screen name="PesananSayaDetail" component={PesananSayaDetail}/>
      </Stack.Navigator>
  );
}

export default PesananSaya;

