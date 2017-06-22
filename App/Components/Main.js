import React, { Component } from 'react';
import { View } from 'react-native';
//import firebase from 'firebase';
import { Header, Button, Spinner } from './common/Header';
import {Login} from './Login';
import LoginForm from './LoginForm';

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
 }
  
  componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
    //   authDomain: 'authentication-70a18.firebaseapp.com',
    //   databaseURL: 'https://authentication-70a18.firebaseio.com',
    //   storageBucket: 'authentication-70a18.appspot.com',
    //   messagingSenderId: '682333809338'
    // });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <Button >
            Log Out
          </Button>
        );
      case false:
        return <Login/>;
      default:
        return <View></View>;
    }
  }

  render() {
    return (
      <View >
        {/* <Header headerText="Authentication" /> */}
        {this.renderContent()}
      </View>
    );
  }
}



const styles = {
  
  container : {
     backgroundColor: '#3a4e4f',
     marginTop: 100,
     padding: 100
  }
};