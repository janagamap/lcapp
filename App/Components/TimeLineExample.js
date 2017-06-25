import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight, 
  
  AsyncStorage
} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import {Divider, Grid, Col, Row} from 'react-native-elements';
import {Web} from './Helpers/WebView';
//import { Button } from 'react-native-elements'

import {AgendaView} from './Agenda';
import {ProfileCard} from './common/ProfileCard';

export class TimeLine extends Component {
  username = "Huey Donaldson"
  constructor(props){
    super(props)
   
  /*

    AsyncStorage.setItem('key', JSON.stringify(false))

// Retrieves from storage as boolean
AsyncStorage.getItem('key', (value) => {
    JSON.parse(value) // boolean false
}

  */
  /*const value = AsyncStorage.getItem('confirmEnrollment', (value) => {
          
            JSON.parse(value);
             console.log(value);
             console.log(typeof(value));
          })
  if(value === null){
    confirmEnrollment = false;
  } else {
    console.log
    confirmEnrollment = value;
  }
    this.state = {
          "confirmEnrollment": confirmEnrollment

        }
    */
    /*AsyncStorage.getItem("confirmEnrollment").then((value) => {
        this.setState({"confirmEnrollment": value});
    }).done();*/



    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)
    this.data = [{
    time: '',
    title: 'Confirm your enrollment',
    description: 'Enrollment confirmation is required to proceed for all the next steps. ',
    type:'action'
  },
  {
    time: '',
    title: 'Courses have been assigned',
    description: '',
    type: 'alert'
  },
  {
    time: '',
    title: 'Schedule your Walk to Class Call',
    description: 'Walk to Class calls are scheduled calls and live sessions to provide proactive assistance to new families',
    type: 'action'
  },
  {
    time: '',
    title: 'Materials/Computers have been shipped',
    lineColor: '#009688',
    description: '',
    type: 'alert'
  },
  {
    time: '',
    title: 'Take online Courses',
    description: 'Online Learning courses are available for your review and practice.',
    url: "http://azva.k12.com/community-and-events/strong-start.html",
    type: 'action'
  },
  {
    time: '',
    title: 'Materials/Computers have been Delivered',
    description: '',
    type: 'alert'
  },
  {
    time: '',
    title: 'Participate in a live Orientation Sessions',
    description: 'Orientation sessions are live Blackboard Class connect sessions (Online Meeting) for all grade bands',
    type: 'action'
  },
  {
    time: '',
    title: '',
    description: ''
  },
  {
    time: '',
    title: 'Take the Pulse Check Survey',
    description: 'Take the Pulse Check Survey',
    type: 'action'
  }

 ]
     this.state = {selected: null}
  } 


  onEventPress(data){
    this.setState({selected: data})
    console.log("In onevent Press method",data);
    if("url" in data){
      this.openPage( data.url)
    };
  }

  openPage(url){
        console.log('the url is', url);
        this.props.navigator.push({
          component: Web,
          title: 'Help',
          passProps: {url}
        });
    }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.type==='action')
      desc = (
        <View style={styles.descriptionContainer}>   
        <Text style={styles.linktext}>{rowData.url}</Text>
        <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  confirmYesHandler(evt){
    console.log(evt);
    console.log("In event handler");
    this.setState({
            "confirmEnrollment": true
        });
    AsyncStorage.setItem("confirmEnrollment", JSON.stringify(true));
  }

  confirmNoHandler(evt){
    console.log(evt);
    console.log("In No event handler");
    
    this.setState({
            "confirmEnrollment": false
        });

    AsyncStorage.setItem("confirmEnrollment", JSON.stringify(false));
  }


  

  render() {
    //'rgb(45,156,219)'
    if(!this.state.confirmEnrollment){
      return(
        <View style={styles.container}>
        <ProfileCard/>

        <View style={styles.confirmContainer}>
            <Text style={styles.heading}>Confirm Enrollment</Text>
            <View style={styles.confirmTextContainer}>
              <Text style={styles.confirmText}>Did you sign this student up for these courses:</Text>
              <Text style={styles.confirmText}>Algebra 1, English 9 & Earth Science?</Text>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.button}
                onPress={this.confirmYesHandler.bind(this)}
                underlayColor="white">
                <Text style={styles.buttonText}>Yes</Text>
            </TouchableHighlight>
              <TouchableHighlight
                style={styles.nobutton}
                onPress={this.confirmNoHandler.bind(this)}
                underlayColor="white">
                <Text style={styles.buttonText}>No</Text>
            </TouchableHighlight>

            {/* 
             <Button title='Yes' color="#841584"
              onPress={this.confirmYesHandler.bind(this)}
              style={styles.yesButton}
             />
             <Button title='No' color="#841584"
               onPress={this.confirmNoHandler.bind(this)}
            />
            */}
          </View>
        </View>

        </View>
        )
    }
    else {
    return (
     <View style={styles.container}>
      <ProfileCard/>
        
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
         
          lineColor='rgb(45,156,219)'
          
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
         
        />
        
      </View> 

    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  paddingTop:5,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:10,
    fontWeight: 'bold'
  },
  alertStyle:{
    backgroundColor: 'red',
    fontSize:6
  },
  descriptionContainer:{
    
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 2,
    fontSize: 10,
    color: 'gray'
  },
  linktext: {
        color: '#48BBEC',
        fontSize: 10,
        paddingBottom: 5
    },
  detailContainerStyle: {
    marginBottom: 5, 
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#BBDAFF",
    borderRadius: 10
  },
  confirmContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  confirmTextContainer: {
    marginTop: 10,

  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    //color: '#979797'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  confirmText:{
    fontSize: 14,
    color: '#565A5C'
  },
  yesButton: {
    backgroundColor: '#99AAFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000033'
  },
   buttonText: {
        fontSize: 14,
        color: '#D8D8D8',
        alignSelf: 'center'
    },
    button: {
        height: 30,
        width: 90,
        flexDirection: 'row',
        backgroundColor: '#006FBF',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        justifyContent: 'center'
    },
    nobutton: {
        height: 30,
        width: 90,
        flexDirection: 'row',
        backgroundColor: '#BDBDBD',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        justifyContent: 'center'
    }
});
