import React from 'react';
import BerandaLand from './beranda/BerandaLand'
import InformasiPemesanan from './beranda/InformasiPemesanan'
import RincianTiket from './beranda/RincianTiket'
import ResultPage from './ResultPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageBaru from './PageBaru';

const Stack = createNativeStackNavigator();

// let x;
// x.toString();

function HomePageD() {
  return (
      <Stack.Navigator initialRouteName='BerandaLand' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BerandaLand" component={BerandaLand}/>
        <Stack.Screen name="RincianTiket" component={RincianTiket}/>
        <Stack.Screen name="InformasiPemesanan" component={InformasiPemesanan}/>
      </Stack.Navigator>
  );
}

export default HomePageD;

