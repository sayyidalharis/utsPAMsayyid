import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Jadwals } from './data.js'
// import DataQuery from './DataQuery'

const RincianTiket = ({route, navigation}) =>{
    const { data } = route.params;
    console.log(data)

    const listJadwal = () => {

        let newJadwal = Jadwals.filter( (x) => {
           return (x.awal == data.awal && 
           x.tujuan == data.tujuan&& 
           x.layanan == data.layanan)
        })

        return newJadwal[0]
    }

    const a = listJadwal()

    data['jadwal_id'] = a.jadwal_id
    data['harga'] = a.harga
    data['status'] = "Booked"

    console.log(data)

    return (
        <View style={styles.container}>
        <Ionicons
            style={styles.menuIcon}
            name="arrow-back"
            color={'#00579C'}
            onPress={() => navigation.goBack()}
        />
        <Text>Rincian Tiket!! {"\n"}Dari : {data.awal} ke </Text>
        <Text>Ke : {data.tujuan}{"\n"}Kelas : {data.layanan}</Text>
        <Text>Tanggal : {data.tanggal}{"\n"}Jam : {data.jam}</Text>
        <StatusBar style="auto" />
        <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate('InformasiPemesanan', { data: data })}
        >
            <Text style={styles.textButton}>adasdas</Text>
        </Pressable>
        {/* <DataQuery navigation={navigation} data = {data}/> */}
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
export default RincianTiket

