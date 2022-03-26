import React, { useState }  from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Picker, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomePage = ({navigation}) =>{
    const [text, onChangeText] = useState({
        keberangkatan: 'Soekarno Hatta',
        tujuan: 'Haneda',
        tanggal: '12/03/2022',
    });


    return (
      <View>
        <View style={navStyle.menu}>
            <Entypo
                style={navStyle.menuIcon}
                name="menu"
                color={'#fff'}
            />
            
            <Text style={navStyle.text}>uts.id kekszs</Text>
            
            <FontAwesome 
                style={navStyle.userIcon}
                name="user"
                color={'#fff'}
            />
        </View>
            
        <View style={formStyle.box}>
          <View style={formStyle.package}>
              <Text style={formStyle.text}>Lokazzi Keberangkatan</Text>
              <View style={formStyle.formSingle}>
                  <MaterialCommunityIcons style={formStyle.Icon} name="airplane-takeoff" size={20} color="#86b257"/>      
                  <Picker
                    selectedValue={text}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => onChangeText({...text, keberangkatan: itemValue})}
                  >
                    <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                    <Picker.Item label="Haneda" value="Haneda" />
                  </Picker>
              </View>
          </View>
          
          <View style={formStyle.package}>
              <Text style={formStyle.text}>Lokasi Tujuan</Text>
              <View style={formStyle.formSingle}>
                  <MaterialCommunityIcons style={formStyle.Icon} name="airplane-landing" size={20} color="#86b257"/>
                  <Picker
                    selectedValue={text}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => onChangeText({...text, tujuan: itemValue})}
                  >
                    <Picker.Item label="Haneda" value="Haneda" />
                    <Picker.Item label="Soekarno Hatta" value="Soekarno Hatta" />
                  </Picker>
              </View>
          </View>

          <View style={formStyle.package}>
              <Text style={formStyle.text}>Tanggal Keberangkatan</Text>
              <View style={formStyle.formSingle}>
                  <MaterialCommunityIcons style={formStyle.Icon} name="calendar-month" size={20} color="#86b257"/>
                  <Picker
                    selectedValue={text}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => onChangeText({...text, tanggal: itemValue})}
                  >
                    <Picker.Item label="12/03/2022" value="12/03/2022" />
                    <Picker.Item label="13/03/2022" value="13/03/2022" />
                    <Picker.Item label="14/03/2022" value="14/03/2022" />
                  </Picker>
              </View>
          </View>

          <View style={formStyle.package}>
              <Pressable 
                  style={formStyle.button}
                  onPress={() => navigation.navigate('ResultPage', {data: text})}
              >
                  <Text style={formStyle.textButton}>Cari</Text>
              </Pressable>
              <Pressable 
                  style={formStyle.button}
                  onPress={() => navigation.navigate('PageBaru')}
              >
                  <Text style={formStyle.textButton}>adasdas</Text>
              </Pressable>
          </View>
          <View style={navStyle.copyright}>
              <Text style={navStyle.textCopyright}>Copyright Sayyid Haris{"\n"}- 119140190</Text>
          </View>
        </View>
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
});

const formStyle = StyleSheet.create({
  box:{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 50,
      width: '80%',
      position: 'absolute',
      top: '50%',
      left: '10%',
      shadowColor: '#000',
      elevation: 5,
  },
  package:{
      marginTop: 15,
  },
  formSingle:{
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      borderRadius: 10,
      marginTop: 5,
  },
  text:{
      fontSize: 16,
      fontWeight: 'bold'
  },
  Icon:{
      padding: 10,
  },
  Input:{
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
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
      marginTop: 4,
  },
  textButton:{
      fontWeight: 'bold',
      fontSize: 20,
      padding: 10,
      color: '#fff',
  },
})

const navStyle = StyleSheet.create({
  menu: {
      flexDirection: 'row',
      backgroundColor: '#86b257',
      justifyContent: 'space-between',
      height: 500,
      borderRadius: 12,
  },
  text: {
      marginTop: 150,
      fontSize: 35,
      color: "white",
      fontWeight: 'bold',
      marginRight: 20
  },
  menuIcon: {
      marginTop: 55,
      fontSize: 40,
      marginLeft:20,
      
  },
  userIcon: {
      marginTop: 55,
      fontSize: 40,
      marginRight:20,
  },
  copyright:{
      alignItems: 'center',
      position: 'absolute',
      top: 500,
      left: '33%',
  },
  textCopyright:{
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      color: "#808080"
  },
})



export default HomePage

