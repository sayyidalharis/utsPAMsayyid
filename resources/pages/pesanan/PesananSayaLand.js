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
            <View>
                <Text style={styles.title}>
                    Informasi  Pemesanan
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
                    onPress={() => navigation.navigate('PesananSayaDetail', { data: data })}
                >
                    <Text style={{color: '#fff'}}> Details </Text>
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
                <Text>TIDAK ADA DATA PEMESANAN</Text>
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
    button:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00579C',
        borderRadius: 20,
        marginTop: 13,
        marginBottom: '3%',
        marginRight: '5%',
        height: '13%'
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

export default PesananSayaLand

