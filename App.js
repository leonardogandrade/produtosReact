import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/components/Login';
import Produtos from './src/components/Produtos';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Produtos' 
        component={Produtos}
        options={{
          headerShown : false
        }}/>
        <Stack.Screen 
        name='Login' 
        component={Login}
        options={{
          headerShown : false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
