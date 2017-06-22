import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export class TimeLineExample extends Component {
  constructor(){
    super()
    this.data = [
      {time: 'Step 5', title: 'Event 1', description: 'Event 1 Description'},
      {time: 'Step 4', title: 'Event 2', description: 'Event 2 Description'},
      {time: 'Step 3', title: 'Event 3', description: 'Event 3 Description'},
      {time: 'Step 2', title: 'Event 4', description: 'Event 4 Description'},
      {time: 'Step 1', title: 'Event 5', description: 'Event 5 Description'},
      {time: 'Step 5', title: 'Event 1', description: 'Event 1 Description'},
      {time: 'Step 4', title: 'Event 2', description: 'Event 2 Description'},
      {time: 'Step 3', title: 'Event 3', description: 'Event 3 Description'},
      {time: 'Step 2', title: 'Event 4', description: 'Event 4 Description'},
      {time: 'Step 1', title: 'Event 5', description: 'Event 5 Description'},
      {time: 'Step 5', title: 'Event 1', description: 'Event 1 Description'},
      {time: 'Step 4', title: 'Event 2', description: 'Event 2 Description'},
      {time: 'Step 3', title: 'Event 3', description: 'Event 3 Description'},
      {time: 'Step 2', title: 'Event 4', description: 'Event 4 Description'},
      {time: 'Step 1', title: 'Event 5', description: 'Event 5 Description'}
    ]
  } 

  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.data}
        />
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
});

