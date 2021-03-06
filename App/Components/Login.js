import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
  } from 'react-native';

import {Dashboard} from './Dashboard';
import {TimeLine} from './TimeLineExample';
import {Home} from './Home';
import { Button } from 'react-native-elements';

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
       
           this.props.navigator.push({
                    title: '',
                    navigationBarHidden: true,
                    translucent: true,
                    component: Home,
                    //leftButtonTitle: ' '
                    //passProps: {userInfo: res}
                });

       
        console.log('Login submitted');
        
    }

	render(){
        console.log("In Login view");
		return (

			<View style={styles.mainContainer}>
            
 {/*  <Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`}
   />
 */}

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
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#3a4e4f'
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

