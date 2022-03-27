import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Lainnya = () =>{
    return (
      <View style={styles.container2}>
      <View>
          <Text style={styles.title}>
              Kapalzy Devs
           </Text>
          <Image 
              source={require('./pfpSayyid.jpg')} style={{
                width: null,
                resizeMode: 'contain',
                height: '40%',
                marginTop:17  ,
                marginBottom: 15}}
          ></Image>
            <View style={styles.box}><View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1
                }}/>
                <Text style={styles.text2}>Nama  : Sayyid Muhammad Umar Al Haris</Text>
                <Text style={styles.text2}>NIM    : 119140190</Text>
                <Text style={styles.text2}>Kelas  : Pengembangan Aplikasi Mobile</Text>
                <Text style={styles.text2}>            : RD </Text>
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: '4%'
                }}/>
            </View>
          </View>
      </View>
      )
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        color: '#00579C',
        marginBottom: 7
    },
    box:{
        backgroundColor: '#F0F0F0',
        width: '90%',
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

export default Lainnya

