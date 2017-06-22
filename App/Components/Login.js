import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
  } from 'react-native';

import {Dashboard} from './Dashboard';
import {TimeLineExample} from './TimeLineExample';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

     handleLogin(){
        //update our indicatorIOS spinner
       this.setState({
            isLoading: true
        });
       // console.log('SUBMIT', this.state.username);
       /* api.getBio(this.state.username)
           .then((res) => {
            console.log("res:", res);
            if(res.message === 'Not Found'){
                this.setState({
                    error: 'User not found',
                    isLoading: false
                })
            } else {
                this.props.navigator.push({
                    title: res.name || 'Select an Option',
                    component: Dashboard,
                    passProps: {userInfo: res}
                });
                this.setState({
                    isLoading: false, 
                    error: false, 
                    username: ''
                })
            }
           }) */
           this.props.navigator.push({
                    title: 'TimeLineExample',
                    component: TimeLineExample,
                    //passProps: {userInfo: res}
                });

       
        console.log('Login submitted');
        //fetch data from github
        //reroute to the next passing that github information
    }

	render(){
        console.log("In Login view");
		return (
			<View style={styles.mainContainer}>
			<Text style={styles.title}> Login Page</Text>
             <TouchableHighlight
                style={styles.button}
                onPress={() => this.handleLogin()}
                underlayColor="white">
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
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

