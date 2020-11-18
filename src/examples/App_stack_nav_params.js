import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function Home({ navigation }){
  return(
    <View style={styles.home}>
      <Text>Tela principal.</Text>
      <Button
        title='Login'
        onPress={()=> navigation.navigate('Details',{
          user : 'leo',
          password : '123456'
        })}
      />
    </View>
  )
}

function Details({route}){
  const {user,password} = route.params;
  return(
    <View style={styles.home}>
      <Text>Tela de detalhes</Text>
      <Text>Usuário: {JSON.stringify(user)}</Text>
      <Text>Senha: {JSON.stringify(password)}</Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Details' component={Details}/> 
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{
            title : 'Principal',
            headerStyle : {
              backgroundColor : '#F34B7D',
            },
            headerTintColor : '#ffffff',
            headerTitleStyle : {
              fontWeight : 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  home : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})