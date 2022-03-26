import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const PesananSayaLand = ({route, navigation}) =>{
    if(route.params){
        const { data } = route.params;
        console.log(data)
        return (
            <View style={styles.container}>
            <Ionicons
                style={styles.menuIcon}
                name="arrow-back"
                color={'#00579C'}
                onPress={() => navigation.goBack()}
            />
            <Text>PESANAN SAYA LANDDDD!! {"\n"}Dari : {data.awal} ke </Text>
            <Text>Ke : {data.tujuan}{"\n"}Kelas : {data.layanan}</Text>
            <Text>Tanggal : {data.tanggal}{"\n"}Jam : {data.jam}</Text>
            <StatusBar style="auto" />
            <Pressable 
                style={styles.button}
                onPress={() => console.log(data)}
            >
                <Text style={styles.textButton}>adasdas</Text>
            </Pressable>
            </View>
          )
    }
    else{
        return(
            <Text>PEsanan saya gengss</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
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
    menuIcon: {
        marginTop: 45,
        fontSize: 40,
        marginLeft:20,
        
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
});

export default PesananSayaLand

