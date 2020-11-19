import React,{useState,useEffect} from 'react';
import {StatusBar,
        ScrollView,
        Image,
        View,
        StyleSheet,
        Text,
        TouchableOpacity,
        SafeAreaView} from 'react-native';

import api from '../services/api';

export default function Produtos(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        async function loadData(){
            const response = await api.get('/produtos');
            setData(response.data);
        }
        loadData();
    },[]);

    return(
        <>
            <StatusBar barStyle='light-content'/>
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
                <SafeAreaView style={styles.mainScreen}>
                    {data.map(d =>(
                        <View key={d._id} style={styles.card}>
                            <View>
                                <Image source={{uri : `${d.imageURL}`}} style={styles.imageCard}/>
                            </View>
                            <View style={styles.detalhes}>
                                <Text style={styles.titulo}>{d.nome}</Text>
                                <Text>{d.fabricante}</Text>
                                <Text>{`R$${d.preco}`}</Text>
                                <TouchableOpacity style={styles.detalhesButton}>
                                    <Text style={styles.detalhesTexto}>DETALHES</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    mainScreen : {
        display : 'flex',
        alignItems : 'center'
    },
    card : {
        display : 'flex',
        justifyContent : 'space-between',
        flexDirection : 'row',
        color : 'black',
        backgroundColor : '#ffffff',
        height : 180,
        width : 340,
        margin : 5,
        borderRadius : 5,
    },
    detalhes : {
        marginTop : 15,
        marginRight : 10,
    },
    titulo : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    imageCard : {
        height : 130,
        width : 130,
        borderRadius : 5,
    },
    detalhesButton : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 30,
        width : 150,
        borderRadius : 3,
        backgroundColor : 'green',
        marginTop : 10,
    },
    detalhesTexto : {
        alignContent : 'center',
        alignItems : 'center',
        color : '#ffffff',
    }
})