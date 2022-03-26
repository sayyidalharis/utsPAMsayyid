import React from 'react';
import BerandaLand from './beranda/BerandaLand'
import InformasiPemesanan from './beranda/InformasiPemesanan'
import RincianTiket from './beranda/RincianTiket'
import TampilanPemesanan from './beranda/TampilanPemesanan'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// let x;
// x.toString();

function Beranda() {
  return (
      <Stack.Navigator initialRouteName='BerandaLand' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BerandaLand" component={BerandaLand}/>
        <Stack.Screen name="RincianTiket" component={RincianTiket}/>
        <Stack.Screen name="InformasiPemesanan" component={InformasiPemesanan}/>
        <Stack.Screen name="TampilanPemesanan" component={TampilanPemesanan}/>
      </Stack.Navigator>
  );
}

export default Beranda;

