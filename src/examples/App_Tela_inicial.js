import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import logoImg from './src/assets/logo.png';

export default function Welcome(){
  return(
    <>
      <View style={styles.container}>
        <Image source={logoImg}/>
        <Text style={styles.texto}>Bem vindo ao React</Text>
        <Text style={styles.texto}>crie apps</Text>
        <Text style={styles.texto}>de forma facil</Text>
        <Text style={styles.texto}>com javascript</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  texto : {
    fontSize : 30,
    color : 'blue',
    fontWeight : 'bold', 
  },
  container : {
    display : 'flex',
    alignItems : 'center',
    marginTop : 20,
  }
})