import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Picker, Pressable} from 'react-native'

const Pembatalan = ({navigation}) =>{
    return (
        <View style={styles.container}>
        <Text>BATALLLLLLLz!! {"\n"}Saying hi!!!!</Text>
        <StatusBar style="auto" />
              <Pressable 
                  style={styles.button}
                  onPress={() => navigation.navigate('HomePageD', { screen: 'PageBaru' })}
              >
                  <Text style={styles.textButton}>adasdas</Text>
              </Pressable>
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
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
});

export default Pembatalan

