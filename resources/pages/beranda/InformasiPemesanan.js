import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, ScrollView, Picker, Pressable} from 'react-native'
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
        <Text style={styles.text}>Rincian Pemesanan!! </Text>
        <View style={styles.box}>
            <Text>Dari : {data.awal} </Text>
            <Text>Ke : {data.tujuan}{"\n\n"}Kelas : {data.layanan}</Text>
            <Text>Tanggal : {data.tanggal}{"\n"}Jam : {data.jam}</Text>
            <StatusBar style="auto" />
        </View>
        <View>
            <Text>Nama Lengkap </Text>
            <View style={styles.field}>
                <TextInput
                    placeholder="Sayyid Muhammad Umar Al Haris"
                    value={text.nama}
                    onChangeText={clickHandler('nama')}
                    underlineColorAndroid="transparent"
                    style={{marginLeft:6}}
                />
            </View>
        </View>
        <View>
            <Text>Identitas </Text>
            <View style={styles.field}>
            <TextInput
                placeholder="119140190"
                value={text.identitas}
                onChangeText={clickHandler('identitas')}
                underlineColorAndroid="transparent"
                style={{marginLeft:6}}
            />
            </View>
        </View>
        <View>
            <Text>Umur </Text>
            <View style={styles.field}>
            <TextInput
                placeholder="17"
                value={text.umur}
                onChangeText={clickHandler('umur')}
                underlineColorAndroid="transparent"
                style={{marginLeft:6}}
            />
            </View>
        </View>  
        <Pressable             
                {...data['nama'] = text.nama}
                {...data['identitas'] = text.identitas}
                {...data['umur'] = text.umur}
                {...data['status'] = "Booked"}
                style={styles.button}
                onPress={() => navigation.navigate('TampilanPemesanan', { data: data })}
            >
                <Text style={styles.textButton}>adasdas</Text>
            </Pressable> 
        </ScrollView>
        </View>
      )
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
        borderWidth: 1,
        borderColor: '#00579C',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
    },
    text:{
        fontSize: 16,
        marginLeft: '6%',
        fontWeight: 'bold',
        marginTop: 9,
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

export default InformasiPemesanan

