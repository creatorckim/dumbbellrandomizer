import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView, workoutDateStylesheet } from 'react-native';
import workoutDateStyles from './WorkDateStyles';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';


// function WorkoutDate({navigation, route}) {

//     // const [exercieArray, setExerciseArray] = useState([]);
//     // const[HeadTable, setHeadTable] = useState(['Exercise', 'Reps', 'Weight']);
//     // const[dataTable, setDataTable] = useState(['Bench Press', '5', '145']);

//     // useEffect(() => {
//     //     console.log(route.params.exerciseArray[0])
//     // })

//     // useEffect(() => {
//     //     setExerciseArray(route.params.exerciseArray);
//     //     // console.log(route.params.exerciseArray)
//     // }, [route.params.exerciseArray])

//     return (
//         // <ScrollView style={workoutDateworkoutDateStyles.container}>
//         //     {route.params.exerciseArray.map((exercise, index) =>
//         //     <View key={index}style={workoutDateworkoutDateStyles.setContainer} >
//         //         <Text>{exercise[0]}</Text>
//         //         <Text>Rep:   {exercise[1]}</Text>
//         //         <Text>Weight:   {exercise[2]}</Text>
//         //     </View>
//         //     )}
//         // </ScrollView>
//         <View style={workoutDateStyles.container}>
//             <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//                 <Row data={HeadTable} style={workoutDateStyles.head} textStyle={workoutDateStyles.text}/>
//                 <Rows data={dataTable} textStyle={workoutDateStyles.text}/>
//             </Table>
//         </View>
//     )
// }

// const workoutDateStyles = workoutDateStylesheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     head: { height: 40, backgroundColor: '#f1f8ff' },
//     text: { margin: 6 }
//   });

// export default WorkoutDate;

 
export default class WorkoutDate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        routine: props.route.params.routine,
        date: props.route.params.date,
        // key: props.route.params.key,
        tableHead: ['Exercise', 'Reps', 'Weight'],
        tableData: props.route.params.exerciseArray,
      }
    }

//    deleteData = async (key) => {
//         try {
//           await AsyncStorage.removeItem(key);
//         } catch(e) {
//           console.log(e);
//         }
        
//       }

   
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

                {/* <TouchableOpacity onPress={() => this.deleteData(state.key)}><Text>zdfbzdfbzdfbzdfbzdfbzdfb</Text></TouchableOpacity> */}
            </ScrollView>
          </View>
        
      )
    }
  }
   
//   const workoutDateStyles = workoutDateStylesheet.create({
//     container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//     head: { height: 40, backgroundColor: '#f1f8ff' },
//     text: { textAlign: 'center', fontSize: 15, margin: 3 }
//   });