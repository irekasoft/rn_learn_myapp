import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,
  Pressable, Button, TextInput, KeyboardAvoidingView, Platform,
  ScrollView

 } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen name="home" component={HomeScreen } />   
        <Stack.Screen name="second" component={SecondScreen } />             
        
    </Stack.Navigator>
  );
}

class MyApp extends Component {

  render(){
    return (     
      <NavigationContainer>

      {/* <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen } />   
        <Stack.Screen name="second" component={SecondScreen } />
      </Stack.Navigator> */}

       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let tintColor = 'lightgrey';

            if (focused === true){
              tintColor = 'tomato';
            }

            if (route.name === 'tab1') {              
            } else if (route.name === 'tab2') {              
            }

            // You can return any component that you like here!
            return <Image source={require('./img/table.png')} style={{tintColor:tintColor}} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}       
       >
        <Tab.Screen name="tab1" component={HomeStack} />
        <Tab.Screen name="tab2" component={SecondScreen} />
      </Tab.Navigator>

      </NavigationContainer>
    )
  }

}

export default MyApp;
