import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
  } from 'react-native';

import { Button } from 'react-native-elements';
import {Separator} from '../Helpers/Separator';
export class ProfileCard extends Component {

constructor(props) {
        super(props);
    }

render(){
       
		return (
		<View style={styles.mainContainer}>
			<View style={styles.topcontainer}>
			<View style={styles.imagecontainer}>

					<Image
          			style={styles.image}
          			source={require('../../../images/student_avatar_icon.png')}
        			/>
				</View>
				<View style={styles.namecontainer}>
					<Text style={styles.name}>Dewey DONALDSON</Text>
				</View>
			</View>
    		
             <Separator/>
             <View style={styles.bottomcontainer}>
	    	<Text style={styles.schoollabel}>SCHOOL START DATE: <Text style={styles.schoollabelText}>AUGUST 21 2017</Text></Text>
			</View>
	    </View>


		)
	}
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 130,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#D46365'
    },
    topcontainer: {
	    flex: 4,
    	flexDirection: 'row',
    	marginTop: 15,
    	justifyContent: 'flex-start',
    	alignSelf: 'flex-start',
    	flexWrap: 'wrap'
    },
    namecontainer: {
    	height: 125,
        width: 125,
        borderRadius: 10,
        marginTop: 0,
        marginLeft: -25,
       
    	
    },

    imagecontainer: {
    	height: 90,
        width: 90,
        borderRadius: 10,
        marginTop: 40,
        marginLeft: -10,
        alignSelf: 'flex-start'
    	
    },

    image: {
        height: 35,
        width: 35,
        borderRadius: 10,
        marginRight: 10,
        alignSelf: 'center'
    },
    bottomcontainer: {
    	flex: 1,
    	alignItems: 'flex-start',
    	marginTop: 8,
    	marginLeft: 10,
    },
    name: {
        //alignSelf: 'center',
        fontSize: 15,
        marginTop: 40,
        marginBottom: 1,
        color: 'white'
    },
    schoollabel: {
    	fontSize: 12,
    	color: 'white',
    	fontWeight: 'bold'
    },
	schoollabelText: {
    	fontSize: 11,
    	color: 'white',
    	opacity: .85
    }
    
});