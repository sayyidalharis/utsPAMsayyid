import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TampilanPemesanan = ({route, navigation}) =>{
    const { data } = route.params;
    console.log(data)
    return (
        <View style={styles.container2}>
            <View>
                <Text style={styles.title}>
                    Kapalzy Payment
                 </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text2}>Nama  : {data.nama}</Text>
                <Text style={styles.text2}>Identitas  : {data.identitas}</Text>
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
                <Text style={{marginLeft:'67%', fontWeight:'bold', fontSize: 14}}>{data.harga}{"\n\n"}</Text>
                <Text style={{marginLeft:'7%', fontWeight:'bold', fontSize: 16  }}>Pembayaran ke 119140190</Text>
                <Text style={{marginLeft:'7%', fontWeight:'bold', fontSize: 16  }}>a/n Sayyid Haris{"\n"}</Text>
            </View>
        <StatusBar style="auto" />
            <View style={styles.wrapper}>
                <Pressable 
                    style={styles.leftButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text > Back </Text>
                </Pressable>

                <Pressable 
                    style={styles.rightButton}
                    onPress={() => navigation.navigate('PesananSaya', {
                        screen: 'PesananSayaLand',
                        params: { data:data },
                      })}
                >
                    <Text style={{color: '#fff'}}> PAY </Text>
                </Pressable>
            </View>
        </View>
      )
}
const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#00579C',
        marginBottom: 7,
        marginTop: '14%'
    },
    text2:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    box:{
        backgroundColor: '#F0F0F0',
        width: '80%',
        borderRadius: 5,
        padding: 10,
        marginTop: '7%',
    },
    container: {
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
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00579C',
        borderRadius: 20,
        marginTop: '14%',
        marginBottom: '6%',
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
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
    wrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '10%' 
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
        marginRight: '6%',
        marginTop: '12%'
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
        marginLeft: '6%',
        marginTop: '12%'
    },
});

export default TampilanPemesanan

