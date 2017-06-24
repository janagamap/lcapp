import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';


var styles  = StyleSheet.create({
	separator: {
		height: 1, 
		backgroundColor: '#0B0B0B',
		opacity: 0.15,
		marginLeft: 1
	}
});


export class Separator extends Component{
	render(){
	  return (
       <View style={styles.separator} />
      );
	}
}