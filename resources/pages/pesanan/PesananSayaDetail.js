import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const PesananSayaDetail = ({route, navigation}) =>{
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
            <View>
                <Text style={styles.title}>
                    Informasi  Pemesanan
                 </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text2}>Dari  : {data.awal}</Text>
                <Text style={styles.text2}>Ke    : {data.tujuan}</Text>
                <Text >{"\n"}Kelas     : {data.layanan}</Text>
                <Text style={{marginBottom:13}}>Tanggal : {data.tanggal}{"\n"}Jam       : {data.jam} {"\n"}</Text>
                
                <Text >Nama       : {data.nama}</Text>
                <Text style={{marginBottom:13}}>Identitas  : {data.identitas}{"\n"}Umur        : {data.umur} {"\n"}</Text>
                
                <Text style={styles.text2}>Harga      : {data.harga}</Text>
                <Text style={{marginBottom:'12%'}}>Status       : {data.status}</Text>
                
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('Pembatalan', { data: data })}
                >
                    <Text > Cancel </Text>
                </Pressable>
            </View>
            </View>
          )
    }
    else{
        return(
            <Text>Pesanan saya gengss</Text>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#00579C',
        marginTop: '8%',
        margin: '11%'
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
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderColor: '#00579C',
        borderRadius: 20,
        height: '12%',
        marginBottom: 10,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
    box:{
        backgroundColor: '#F0F0F0',
        width: '92%',
        left: '4%',
        borderRadius: 5,
        padding: 10,
        marginTop: '2%',
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
    leftButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderColor: '#00579C',
        borderWidth: 1,
        width: '35%',
        borderRadius: 9,
        padding: 12,
        marginRight: '11%',
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
        marginLeft: '11%',
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
        color: '#fff',
    },
    menuIcon: {
        fontSize: 30,
        marginLeft: 10,
        
    },
    wrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default PesananSayaDetail

