import React, { useState }   from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Picker, Pressable} from 'react-native'

const BerandaLand = ({navigation}) =>{

    const [text, onChangeText] = useState({
        awal: 'Jawa',
        tujuan: 'Sumatera',
        layanan: 'Ekonomi',
        tanggal: '12/03/2022',
        jam: 'Pagi',
    });

    return (
        <View style={styles.container}>
        <Text>BERANDA LANDD!! {"\n"}Saying hi!!!!</Text>
        
        <Text>Pelabuhan Awal</Text>
        <Picker
            selectedValue={text}
            style={{ height: 50, width: 150 }}
            placeholder="Pilih"
            onValueChange={(itemValue) => onChangeText({...text, awal: itemValue})}
        >
            <Picker.Item label="Jawa" value="Jawa" />
            <Picker.Item label="Sumatera" value="Sumatera" />
            <Picker.Item label="Kalimanatan" value="Kalimantan" />
            <Picker.Item label="Sulawesi" value="Sulawesi" />
            <Picker.Item label="Bali" value="Bali" />
        </Picker>

        <Text>Pelabuhan Tujuan</Text>
        <Picker
            selectedValue={text}
            style={{ height: 50, width: 150 }}
            placeholder="Pilih"
            onValueChange={(itemValue) => onChangeText({...text, tujuan: itemValue})}
        >
            <Picker.Item label="Sumatera" value="Sumatera" />
            <Picker.Item label="Jawa" value="Jawa" />
            <Picker.Item label="Kalimanatan" value="Kalimantan" />
            <Picker.Item label="Sulawesi" value="Sulawesi" />
            <Picker.Item label="Bali" value="Bali" />
        </Picker>

        <Text>Kelas Layanan</Text>
        <Picker
            selectedValue={text}
            style={{ height: 50, width: 150 }}
            placeholder="Pilih"
            onValueChange={(itemValue) => onChangeText({...text, layanan: itemValue})}
        >
            <Picker.Item label="Ekonomi" value="Ekonomi" />
            <Picker.Item label="Bisnis" value="Bisnis" />
            <Picker.Item label="Eksekutif" value="Eksekutif" />
        </Picker>
        
        <Text>Tanggal Masuk Pelabuhan</Text>
        <Picker
            selectedValue={text}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => onChangeText({...text, tanggal: itemValue})}
        >
            <Picker.Item label="12/03/2022" value="12/03/2022" />
            <Picker.Item label="13/03/2022" value="13/03/2022" />
            <Picker.Item label="14/03/2022" value="14/03/2022" />
        </Picker>

        <Text>Jam Masuk Pelabuhan</Text>
        <Picker
            selectedValue={text}
            style={{ height: 50, width: 150 }}
            placeholder="Pilih"
            onValueChange={(itemValue) => onChangeText({...text, jam: itemValue})}
        >
            <Picker.Item label="Pagi" value="Pagi" />
            <Picker.Item label="Siang" value="Siang" />
            <Picker.Item label="Malam" value="Malam" />
        </Picker>
        
        <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate('RincianTiket', { data: text })}
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
export default BerandaLand

