import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Jadwals } from './data.js'
// import DataQuery from './DataQuery'

const RincianTiket = ({route, navigation}) =>{

    const { data } = route.params;
    console.log(data)

    if(data.awal == data.tujuan){
        return(
            <View style={styles.container2}>
            <View>
                <Text style={styles.title}>
                    Kapalzy
                 </Text>
            </View>
                <Text style={{marginBottom:'20%'}}>TIDAK ADA DATA PELAYARAN</Text>
            <Ionicons
                style={styles.menuIcon}
                name="arrow-back"
                color={'#00579C'}
                onPress={() => navigation.goBack()}
            />
            </View>
        )
    }
    else{

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

    console.log(data)

    return (
        <View style={styles.container}>
        <ScrollView>
            <Ionicons
                style={styles.menuIcon}
                name="arrow-back"
                color={'#00579C'}
                onPress={() => navigation.goBack()}
            />
            <View>
                <Text style={styles.title}>
                    Kapalzy
                 </Text>
            </View>
            <Text style={styles.text}>{"\n"}Rincian Tiket!! {"\n"}Kuota tersedia : 10000 </Text>
            <View style={styles.box}>
                <Text style={styles.text2}>Dari  : {data.awal}</Text>
                <Text style={styles.text2}>Ke    : {data.tujuan}</Text>
                <Text >{"\n"}Kelas     : {data.layanan}</Text>
                <Text style={{marginBottom:13}}>Tanggal : {data.tanggal}{"\n\n"}Jam       : {data.jam}</Text>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: '4%'
                }}/>
                <Text style={{marginTop:'7%'}}>Total Harga (Dewasa x1)  :{"\n"}</Text>
                <Text style={{marginLeft:'67%', fontWeight:'bold'}}>{data.harga}{"\n"}</Text>
            </View>
            <View style={styles.wrapper}>
                <Pressable 
                    style={styles.leftButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text > Kembali </Text>
                </Pressable>

                <Pressable 
                    style={styles.rightButton}
                    onPress={() => navigation.navigate('InformasiPemesanan', { data: data })}
                >
                    <Text style={{color: '#fff'}}> Lanjutkan </Text>
                </Pressable>
            </View>
        </ScrollView>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#00579C',
        marginBottom: 7
    },
    container:{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        width: '90%',
        left: '5%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: '20%',
        marginBottom: '10%'
    },
    container2:{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        width: '90%',
        left: '5%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: '20%',
        marginBottom: '10%',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    box:{
        backgroundColor: '#F0F0F0',
        width: '80%',
        left: '10%',
        borderRadius: 5,
        padding: 10,
        marginTop: '7%',
        marginBottom: '7%',
    },
    label:{
        marginTop: 10,
    },
    field:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#00579C',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
    },
    text:{
        fontSize: 16,
        marginLeft: '7%',
        fontWeight: 'bold'
    },
    text2:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    input:{
        padding:10,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7c31',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    leftButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#00579C',
        borderWidth: 1,
        width: '35%',
        borderRadius: 9,
        padding: 12,
        marginRight: '8%',
    },
    rightButton:{ 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00579C',
        borderColor: '#00579C',
        borderWidth: 1,
        width: '35%',
        borderRadius: 9,
        padding: 10,
        marginLeft: '8%',
    },
    wrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '10%' 
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
    menuIcon: {
        fontSize: 30,
        marginLeft:20,
        
    },
});
export default RincianTiket

