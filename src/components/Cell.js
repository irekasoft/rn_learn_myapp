import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

class Cell extends Component {
   render() {
       return (
        <TouchableOpacity 

          onPress={()=>{
              alert('hi');
          }}
          style={{flexDirection:'row', backgroundColor:'grey', padding: 6 }}
        
        >

        <Image
         style={{
           width: 50,
           height: 50,
           marginRight: 12,
         }}
         source={{
           uri: 'https://reactnative.dev/img/tiny_logo.png',
         }}
       />
   
       <View>
         <Text style={{fontSize:17, fontWeight:'800', marginBottom:6}}>{this.props.title}</Text>
         <Text style={{marginBottom:6}}>Hello World!</Text>
         <Text style={{marginBottom:6}}>Hello World!</Text>
       </View>
         
       </TouchableOpacity>
       );
   }
}

const styles = {
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
};

export default Cell;
