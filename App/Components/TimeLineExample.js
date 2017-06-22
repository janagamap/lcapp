import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import {Divider, Grid, Col, Row} from 'react-native-elements';
import {Web} from './Helpers/WebView';

export class TimeLine extends Component {
  username = "Huey Donaldson"
  constructor(){
    super()

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
          title: 'Web View',
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





  render() {
    //'rgb(45,156,219)'
    return (
     <View style={styles.container}>
      <ScrollView>
        <View style={styles.topcontainer} />
        <Divider style={{ backgroundColor: 'blue', width: '100%' }} />
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
        </ScrollView>

        
        
      </View> 

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  paddingTop:65,
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
  }
});
