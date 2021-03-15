import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,
  Pressable, Button, TextInput, KeyboardAvoidingView, Platform,
  ScrollView

 } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

class MyApp extends Component {

  render(){
    return (     
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen } />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default MyApp;
