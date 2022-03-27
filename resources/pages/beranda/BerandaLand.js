import React, { useState }   from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Picker, Pressable} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';


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
        <ScrollView>
            <View>
                <Text style={styles.title}>
                    Kapalzy
                 </Text>
            </View>
            <View style={styles.label}>
                <Text>Pelabuhan Awal</Text>
                <View style={styles.field}>
                    <Fontisto style={styles.icon} name="ship" size={28} />
                    <Picker
                        selectedValue={text}
                        style={{ height: '73%', width: '90%' }}
                        placeholder="Pilih"
                        onValueChange={(itemValue) => onChangeText({...text, awal: itemValue})}
                    >
                        <Picker.Item label="Jawa" value="Jawa" />
                        <Picker.Item label="Sumatera" value="Sumatera" />
                        <Picker.Item label="Kalimanatan" value="Kalimantan" />
                        <Picker.Item label="Sulawesi" value="Sulawesi" />
                        <Picker.Item label="Bali" value="Bali" />
                        <Picker.Item label="Papua" value="Papua" />
                    </Picker>
                </View>

                <Text>Pelabuhan Tujuan</Text>
                <View style={styles.field}>
                    <FontAwesome style={styles.icon} name="ship" size={28} />
                    <Picker
                        selectedValue={text}
                        style={{ height: '73%', width: '90%' }}
                        placeholder="Pilih"
                        onValueChange={(itemValue) => onChangeText({...text, tujuan: itemValue})}
                    >
                        <Picker.Item label="Sumatera" value="Sumatera" />
                        <Picker.Item label="Jawa" value="Jawa" />
                        <Picker.Item label="Kalimanatan" value="Kalimantan" />
                        <Picker.Item label="Sulawesi" value="Sulawesi" />
                        <Picker.Item label="Bali" value="Bali" />
                        <Picker.Item label="Papua" value="Papua" />
                    </Picker>
                </View>

                <Text>Kelas Layanan</Text>
                <View style={styles.field}>
                    <Entypo style={styles.icon} name="drink" size={28} />
                    <Picker
                        selectedValue={text}
                        style={{ height: '73%', width: '90%' }}
                        placeholder="Pilih"
                        onValueChange={(itemValue) => onChangeText({...text, layanan: itemValue})}
                    >
                        <Picker.Item label="Ekonomi" value="Ekonomi" />
                        <Picker.Item label="Bisnis" value="Bisnis" />
                        <Picker.Item label="Eksekutif" value="Eksekutif" />
                    </Picker>
                </View>
                
                <Text>Tanggal Masuk Pelabuhan</Text>
                <View style={styles.field}>
                    <Fontisto style={styles.icon} name="date" size={28} />
                    <Picker
                        selectedValue={text}
                        style={{ height: '73%', width: '90%' }}
                        onValueChange={(itemValue) => onChangeText({...text, tanggal: itemValue})}
                    >
                        <Picker.Item label="12/03/2022" value="12/03/2022" />
                        <Picker.Item label="13/03/2022" value="13/03/2022" />
                        <Picker.Item label="14/03/2022" value="14/03/2022" />
                    </Picker>
                </View>

                <Text>Jam Masuk Pelabuhan</Text>
                <View style={styles.field}>
                    <FontAwesome style={styles.icon} name="clock-o" size={28} />
                    <Picker
                        selectedValue={text}
                        style={{ height: '73%', width: '90%' }}
                        placeholder="Pilih"
                        onValueChange={(itemValue) => onChangeText({...text, jam: itemValue})}
                    >
                        <Picker.Item label="Pagi" value="Pagi" />
                        <Picker.Item label="Siang" value="Siang" />
                        <Picker.Item label="Malam" value="Malam" />
                    </Picker>
                </View>

                <View style={styles.field}>
                    <Text style={{marginLeft:'8%', fontWeight:'bold'}}>Dewasa </Text>         
                    <Text style={{marginLeft:'40%', fontWeight:'bold', margin:7}}> 1 Orang</Text>
                </View>
                
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('RincianTiket', { data: text })}
                >
                <Fontisto style={styles.icon} name="search" size={22} />
                    <Text style={styles.textButton}>Cari Tiket</Text>
                </Pressable>
            </View>
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
        marginTop: '17%',
        marginBottom: '10%'
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
    text2:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#fff',
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
})
export default BerandaLand

