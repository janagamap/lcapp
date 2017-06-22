/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image
} from 'react-native';

//import {Main} from './App/Components/Main';
import {Login} from './App/Components/Login';

export default class lcapp extends Component {
  render() {
    return (
      <View style={styles.logocontainer}>
      

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
         <Image
          style={{width: 20, height: 20}}
          source={require('./images/K12_logo_colored.png')}
        />
        <View sytle={styles.imagecontainer}>
        <Image
          style={{width: 20, height: 20}}
          source={require('./images/profile_avatar_icon.png')}
        />
         <Text>Donald</Text>
         </View>

        </View>
     
     <NavigatorIOS
     barTintColor='#D1E030'
  titleTextColor='#fff'
  tintColor='blue'
      style={{flex: 1}}
        initialRoute={{
          title: 'Login',
          component: Login
        }} 
        />
        
      </View>  

    );
  }
}

const styles = StyleSheet.create({
 logocontainer:{
    flex: 1,
    marginTop: 25,
   backgroundColor: 'white'
  },
 container:{
    flex: 1,
   backgroundColor: 'white'
  },
  imagecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  }
});

AppRegistry.registerComponent('lcapp', () => lcapp);
