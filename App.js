import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from './resources/pages/Beranda'
import PesananSaya from './resources/pages/PesananSaya'
import Pembatalan from './resources/pages/Pembatalan'
import Lainnya from './resources/pages/Lainnya'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        tabBarActiveTintColor: '#00579C',
      }}
      >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PesananSaya"
        component={PesananSaya}
        options={{
          headerShown: false,
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leanpub" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{
          headerShown: false,
          tabBarLabel: 'Pembatalan',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="window-close" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          headerShown: false,
          tabBarLabel: 'Lainnya',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-list" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;