import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  NavigatorIOS,
  TouchableHighlight
  } from 'react-native';

import {TimeLine} from './TimeLineExample';

export class Home extends  Component {

	constructor(props) {
		super(props);
	}

	onGettingReady(){
		console.log("Getting Ready Clicked");
		this.props.navigator.push({
                    title: 'Getting Ready CheckList',
                   // navigationBarHidden: true,
                    //translucent: true,
                    component: TimeLine,
                    //leftButtonTitle: ' '
                    //passProps: {userInfo: res}
                });
	}

    render(){
    	return (
    		 <View style={styles.container}>
              
              <View style={[styles.quarterHeight, {flexDirection: 'row'}]} >
              	<Image
          		style={{width: 140, height: 80, 
          			justifyContent: 'flex-start', 
          			marginTop: 40, 
          			marginLeft: 30,
				}}
         		 source={require('../../images/cava_logo_sm.png')}
        		/>
				<View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
        				<Text>CALIFORNIA</Text>
        				<Text> VIRTUAL</Text>
        				<Text>ACADEMIES </Text>
        				<Text>POWERED BY K12</Text>
        				</View>

              </View>
              <View style={styles.threequartersHeight} >
					<View style={[styles.quarterHeight, {backgroundColor: '#FBA730', flexDirection: 'row'}]} >
						<Image
          				style={{width: 80, height: 80, justifyContent: 'flex-start',
          					 marginTop: 40, marginLeft: 30,
						}}
         		 		source={require('../../images/alerts.png')}
        				/>	
        				<View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
        				<Text>Alerts and </Text>
        				<Text>Announcements </Text>
        				</View>
					</View>	
					<TouchableHighlight style={[styles.quarterHeight, {alignSelf: 'center', flexDirection: 'row'}]} onPress = { this.onGettingReady.bind(this) }>
					<View style={[styles.quarterHeight, {backgroundColor: '#D46365', flexDirection: 'row'}]} >
						<Image
          				style={{width: 80, height: 80, justifyContent: 'flex-start',
          					 marginTop: 40, marginLeft: 30,
						}}
         		 		source={require('../../images/checklist.png')}
        				/>	
        				<View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
        				<Text>Getting Ready</Text>
        				<Text>Checklist </Text>
        				</View>
					</View>	
					</TouchableHighlight>
					<View style={[styles.quarterHeight, {backgroundColor: '#A88FC5', flexDirection: 'row'}]} >
						 <Image
          				style={{width: 80, height: 80, justifyContent: 'flex-start',
          					 marginTop: 40, marginLeft: 30,
						}}
         		 		source={require('../../images/knowledge_center.png')}
        				/>	
        				<View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
        				<Text>Knowledge</Text>
        				<Text>Center </Text>
        				</View>
					</View>	
				
              </View>
             
          </View>
    	)
    }

};

const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column'
    },
    threequartersHeight: {
        flex: .75,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#48A7B0'
    }


});