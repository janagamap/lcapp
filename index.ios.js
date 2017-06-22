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
  NavigatorIOS
} from 'react-native';

//import {Main} from './App/Components/Main';
import {Login} from './App/Components/Login';

export default class lcapp extends Component {
  render() {
    return (
     <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Login',
          component: Login
        }} 
        />
        
        

    );
  }
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: '#3a4e4f'
  },
});

AppRegistry.registerComponent('lcapp', () => lcapp);
