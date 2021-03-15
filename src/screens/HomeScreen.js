import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,
    Pressable, Button, TextInput, KeyboardAvoidingView, Platform,
    ScrollView
} from 'react-native'
import Cell from '../components/Cell';

class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }  

   render() {
       return (
        <View style={styles.container} >
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}      
       >
        <ScrollView>
        <Text>
          {this.state.text}
        </Text>
  
        <Cell onPress={()=>{ 
            
            this.props.navigation.navigate('second')

         }} title={"ABC 1"} />

        <Cell title={"ABC 1"} />
        <Cell title={"ABC 1"} />
  
        <TextInput 
          style={{
            padding:8,
            // backgroundColor:'skyblue',
            marginVertical: 6,
            borderColor: 'grey',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
  
          placeholder="Input"
  
          onChangeText={(text)=>{
            this.setState({
              text: text,
            })
          }}
  
        />
  
         
        <Pressable onPress={()=>{
          alert(this.state.text);
  
        }
        }>
  
        <Button
          onPress={()=>{}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />  
  
        <Text>I'm pressable!</Text>
        </Pressable>
  
        </ScrollView>
        </KeyboardAvoidingView>
        </View>
       );
   }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });

export default HomeScreen;
