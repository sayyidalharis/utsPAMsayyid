import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native'

const BerandaLand = ({navigation}) =>{
    return (
        <View style={styles.container}>
        <Text>pesanan saya {"\n"}Saying hi!!!!</Text>
        <StatusBar style="auto" />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  button:{
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ed7c31',
      borderRadius: 20,
      marginTop: 4,
  },
});

export default BerandaLand

