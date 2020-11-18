import React,{useState} from 'react';
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

const screenHeight = Math.round(Dimensions.get('window').height);

export default function Login({ navigation }){
    const [usuario,setUsuario] = useState('');
    const [senha,setSenha] = useState('');

    async function autentica(){
        const response = await api.post('/autentica',{
          usuario,
          senha,
        })
        
        if(response.data.token != ''){
            navigation.navigate('Produtos');
        }else{
            alert('usuario ou senha invlidos')
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
        marginTop : screenHeight * 0.15,
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