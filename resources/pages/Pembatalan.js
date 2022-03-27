import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Pembatalan = ({route, navigation}) =>{
    if(route.params){
        const { data } = route.params;
        data.status = "Cancelled"
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
                    Informasi  Pembatalan
                 </Text>
            </View> 
            <View style={styles.box}>
                <Text style={styles.text2}>Dari  : {data.awal}</Text>
                <Text style={styles.text2}>Ke    : {data.tujuan}</Text>
                <Text >{"\n"}Kelas     : {data.layanan}</Text>
                <Text style={{marginBottom:13}}>Tanggal : {data.tanggal}{"\n"}Jam       : {data.jam}{"\n\n"}Status      : {data.status}</Text>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: '4%'
                }}/>
                <Text style={{marginTop:'7%'}}>Total Harga (Dewasa x1)  :{"\n"}</Text>
                <Text style={{marginLeft:'67%', fontWeight:'bold'}}>{data.harga}{"\n"}</Text>
            
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('PesananSaya', {
                        screen: 'PesananSayaLand'
                      })}
                >
                    <Text style={{color: '#fff'}}> TELAH DIBATALKAN </Text>
                </Pressable>
                
            </View>
            </View>
          )
    }
    else{
        return(
            <View style={styles.container2}>
            <View>
                <Text style={styles.title}>
                    Kapalzy
                 </Text>
            </View>
                <Text>TIDAK ADA DATA BATAL</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 37,
        fontWeight: 'bold',
        color: '#00579C',
        marginBottom: 7
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
        backgroundColor: 'red',
        borderRadius: 20,
        marginTop: 4,
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
});

export default Pembatalan

