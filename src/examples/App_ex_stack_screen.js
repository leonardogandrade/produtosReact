import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home(){
  return(
    <View style={styles.home}>
      <Text>Bem vindo à tela principal.</Text>
      <Button
        title='Detalhes'
      />
    </View>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  home : {
    flex : 1, 
    alignItems : 'center', 
    justifyContent: 'center'}
})