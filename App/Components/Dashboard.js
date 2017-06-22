import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  } from 'react-native';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
	render(){
        console.log("In Dashboard view");
		return (
			<View style={styles.mainContainer}>
			<Text style={styles.title}> Dashboard Page</Text>
            </View>
		)
	}
};  


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'red'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});

