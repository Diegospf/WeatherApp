import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity} from 'react-native';

const image =  {uri : 'https://blog.chbagro.com.br/user-files/blog/169618.jpg'};
import wallpaper from '../AwesomeProject/assets/wallpaper.png';
import logo from '../AwesomeProject/assets/logo.png';
export default function App() {

  const [text,setText] = useState('');

  async function getFromApi(text){
    var url = 'https://weather.contrateumdev.com.br/api/weather/city/?city=' + text
    await fetch(url, {method: 'get', 
                headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
              }).then(response=>response.json()).then((json)=>{
                const temp = json.main.temp
                alert("Temperatura: " + temp)
              })
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={wallpaper} resizeMode="cover" style={styles.image}>
        <Image source={logo} style={styles.logo} resizeMode="cover"></Image>
        <StatusBar style="auto" />
        <TextInput style={styles.input} placeholder="Digite aqui" onChangeText={(text)=>setText(text)}></TextInput>
        <TouchableOpacity onPress={()=>getFromApi(text)}>
          <View>
            <Text style={styles.button}>Pesquisar</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:250,
    height:250
  },
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    borderRadius:20,
    padding:15,
    margin:30,
    marginTop: -30
  },
  input:{
    color:'grey',
    fontSize:15,
    backgroundColor:'white',
    borderRadius: 20,
    textAlign: "center",
    width:'50%',
  },
  button:{
    backgroundColor:'blue',
    width: 100,
    height: 30,
    margin: 10,
    color: 'white',
    borderRadius: 10,
    textAlign:'center',
    textAlignVertical:'center'
  }
});
