import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchResult from './SearchResult'


const ResultPage = ({route, navigation}) =>{
    const { data } = route.params;
    return (
        <View>
            <View style={navStyle.menu}>
                <View style={navStyle.Icon}>
                    <Ionicons
                        style={navStyle.menuIcon}
                        name="arrow-back"
                        color={'#fff'}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={navStyle.textHead}>Hiling.id</Text>
                    <FontAwesome 
                        style={navStyle.userIcon}
                        name="user"
                        color={'#fff'}
                    />
                </View>
                <View style={navStyle.text}>
                    
                    <Text style={navStyle.textHasil}>Hasil Pencarian Penerbangan</Text>
                    <Text style={navStyle.textTanggal}>{data.tanggal}</Text>
                </View>
            </View>
            
            <SearchResult navigation={navigation} data = {data}/>
            <View style={navStyle.copyright}>
                <Text style={navStyle.textCopyright}>Copyright Sayyid Haris{"\n"}- 119140190</Text>
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

const navStyle = StyleSheet.create({
    Icon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        backgroundColor: '#86b257',
        height: 200,
        borderRadius: 20,
        marginBottom: 20
    },
    text:{
        alignItems: 'center'
    }, 
    textHead: {
        marginTop: 80,
        marginRight: 15,
        fontSize: 35,
        color: "white",
        fontWeight: 'bold'
    },
    textHasil:{
        fontSize: 15,
        color: "white",
    },
    textTanggal:{
        fontSize: 15,
        color: "white",
    },
    menuIcon: {
        marginTop: 45,
        fontSize: 40,
        marginLeft:20,
        
    },
    userIcon: {
        marginTop: 45,
        fontSize: 40,
        marginRight:20,
    },
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        top: 700,
        left: '30%',
    },
    textCopyright:{
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: "#808080"
    }
})

export default ResultPage

