import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,
  Pressable, Button, TextInput, KeyboardAvoidingView, Platform,
  ScrollView

 } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen'

const Stack = createStackNavigator();

class MyApp extends Component {

  render(){
    return (     
      <NavigationContainer>

      <Stack.Navigator>


        <Stack.Screen name="home" component={HomeScreen } />   

        <Stack.Screen name="second" component={SecondScreen } />

             
        
      </Stack.Navigator>

      </NavigationContainer>
    )
  }

}

export default MyApp;
