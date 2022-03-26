import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const InformasiPemesanan = ({route, navigation}) =>{
    const { data } = route.params;
    
    const [text, onChangeText] = useState({
        nama: '',
        identitas: '',
        umur: '',
    });
    
    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }

    return (
        <View style={styles.container}>
        <Ionicons
            style={styles.menuIcon}
            name="arrow-back"
            color={'#00579C'}
            onPress={() => navigation.goBack()}
        />
        <Text>Rincian Pemesanan!! {"\n"}Dari : {data.awal} ke </Text>
        <Text>Ke : {data.tujuan}{"\n"}Kelas : {data.layanan}</Text>
        <Text>Tanggal : {data.tanggal}{"\n"}Jam : {data.jam}</Text>
        <StatusBar style="auto" />
        <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate('TampilanPemesanan', { data: data })}
        >
            <Text style={styles.textButton}>adasdas</Text>
        </Pressable>
        <View>
            <Text>Nama Lengkap </Text>
            <TextInput
                placeholder="Sayyid Muhammad Umar Al Haris"
                value={text.nama}
                onChangeText={clickHandler('nama')}
                underlineColorAndroid="transparent"
            />
        </View>
        <View>
            <Text>Identitas </Text>
            <TextInput
                placeholder="119140190"
                value={text.identitas}
                onChangeText={clickHandler('identitas')}
                underlineColorAndroid="transparent"
            />
        </View>
        <View>
            <Text>Umur </Text>
            <TextInput
                placeholder="17"
                value={text.umur}
                onChangeText={clickHandler('umur')}
                underlineColorAndroid="transparent"
            />
        </View>
        <Pressable 
            {...data['nama'] = text.nama}
            {...data['identitas'] = text.identitas}
            {...data['umur'] = text.umur}
            style={styles.button}
            onPress={() => console.log(data)}
        >
            <Text style={styles.textButton}>tes</Text>
        </Pressable>
        </View>
      )
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

export default InformasiPemesanan

