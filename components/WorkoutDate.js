import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import workoutDateStyles from './WorkDateStyles';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


 
export default class WorkoutDate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        routine: props.route.params.routine,
        date: props.route.params.date,
        tableHead: ['Exercise', 'Reps', 'Weight'],
        tableData: props.route.params.exerciseArray,
      }
    }
   
    render() {
      const state = this.state;
      return (
          <View style={workoutDateStyles.container}>
              <ScrollView style={workoutDateStyles.scrollView}>
                  <View style={workoutDateStyles.dataContainer}>
                    <Text style={workoutDateStyles.dataText}>Routine: {state.routine}</Text>
                    <Text style={workoutDateStyles.dataText}>{state.date}</Text>
                  </View>
                
                <Table borderStyle={{borderWidth: 2, borderColor: '#fff'}}>
                    <Row data={state.tableHead} style={workoutDateStyles.head} textStyle={workoutDateStyles.text}/>
                    <Rows data={state.tableData} textStyle={workoutDateStyles.text}/>
                </Table>

            </ScrollView>
          </View>
        
      )
    }
  }
