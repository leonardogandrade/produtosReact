import React,{useState,useEffect} from 'react';
import {
    Text,
    StyleSheet,
    StatusBar,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

const screenHeight = Math.round(Dimensions.get('window').height);
import {IsLogged} from '../services/autentica';

export default function Login({ navigation }){
    const [usuario,setUsuario] = useState('');
    const [senha,setSenha] = useState('');

    useEffect(()=>{
        if(IsLogged != ''){
            navigation.navigate('Produtos');
        }
    },[]);

    async function StoreLogin(usuario,senha,token){
        try{
            await AsyncStorage.setItem('@usuario_key',usuario);
            await AsyncStorage.setItem('@senha_key',senha);
            await AsyncStorage.setItem('@token_key',token);
        }catch(err){
            console.log(`Erro ao gravar AsyncStorage - ${err}`)
        }
    }

    async function autentica(){
        const response = await api.post('/autentica',{
          usuario,
          senha,
        })
        
        if(response.data.token != ''){
            StoreLogin(response.data.usuario,response.data.senha,response.data.token);
            navigation.navigate('Produtos');
        }else{
            alert('usuario e/ou senha inválido(s)');
        }
    }

    return(
      <>
        <StatusBar barStyle='dark-content'/>
        <SafeAreaView>
           <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    placeholder={'usuario@dominio.com.br'}
                    style={styles.textInput}
                    onChangeText={setUsuario}
                />
                <TextInput
                    autoCapitalize='none'
                    secureTextEntry={true}
                    placeholder={'senha'}
                    style={styles.textInput}
                    onChangeText={setSenha}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={autentica}>
                    <Text style={styles.text}>ENTRAR</Text>
                </TouchableOpacity>
           </View>
        </SafeAreaView>
      </>
    )
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        alignItems : 'stretch',
        justifyContent : 'center',
        padding : 10,
        marginTop : screenHeight * 0.25,
    },
    textInput : {
        backgroundColor : '#dddddd',
        borderRadius : 5,
        marginTop : 10,
    },
    button : {
        height : 50,
        backgroundColor : '#3F51B5',
        marginTop : 10,
        borderRadius : 5,
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
        color : '#ffffff',
        fontSize : 18,
        fontWeight : 'bold'
    }
})