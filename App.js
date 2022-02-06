import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import ExerAmtScreen from './components/ExerAmtScreen';
import ExerciseDetail from './components/ExerciseDetail';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarView from './components/CalendarView';


function HomeScreen({navigation, route}) {

  const [routine, setRoutine] = useState('');
  const [exercises, setExercises] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [exerciseArray, setExerciseArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);

  useEffect(() => {
    getAllDate();
  }, [])


  useEffect(() => {

      if (route.params?.exerciseList) {
        showExercises(route.params?.exerciseList);
  
      }

  }, [route.params?.exerciseList])


  const setToExerAmtScreen = (pickedRoutine) => {
    SheetManager.hideAll();
    setRoutine(pickedRoutine);
    navigation.navigate('ExerAmt', pickedRoutine);
  }

  const showExercises = (data) => {
    setExercises(data);
    setShowButton(true);
  }

  const routineObj = (routine, array) => {
    let randomKey = uuid.v1();
    let date = new Date();
    let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
    let tempObj = {'key': randomKey, 'date': isoDateTime, 'routine': routine, 'exerciseArray': array};

    if (exerciseArray.length != 0) {
      saveRoutine(tempObj);
    }
    
  }

  const saveRoutine = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(value.key, jsonValue)
      getAllDate();
    } catch (e) {
      console.log(e);
    }

  }

  const getAllDate = async () => {
    try {  
      const keys = await AsyncStorage.getAllKeys();  
      const resultArray = [];
      await AsyncStorage.multiGet(keys).then(key => {
        key.forEach(data => {
          // resultArray.push(JSON.parse(data[1]));
          let tempObj = JSON.parse(data[1]);
          // console.log(tempObj.date);
          resultArray.push(tempObj.date);
        });
      });

      setDateArray(resultArray);

      // console.log(resultArray);
   } catch (e) {
      console.log(e);
   }
  }
  

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        exercises.length != 0 ? 
          <ScrollView style={styles.scrollView}>
            {exercises.map((exercise, index) => 
              <ExerciseDetail key={index} name={exercise} exerciseArray={exerciseArray} setExerciseArray={setExerciseArray}/>
            )}
        </ScrollView> : <CalendarView dateArray={dateArray}/>
      }
      {
        showButton ? 
        <View style={styles.actionBarContainer}>
          <TouchableOpacity onPress={() => {routineObj(routine, exerciseArray); setExercises([]); setShowButton(false)}}>
            <View style={styles.addButtonContainer}>
                <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View> : null
      }
      <ActionSheet id="routine_sheet">
        <View style={styles.sheetButtons}>
          <TouchableOpacity onPress={() => {setToExerAmtScreen('push')}}>
            <Text>PUSH</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity onPress={() => {setToExerAmtScreen('pull')}}>
            <Text>PULL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity onPress={() => {setToExerAmtScreen('upper')}}>
              <Text>UPPER</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity onPress={() => {setToExerAmtScreen('lower')}}>
            <Text>LOWER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity onPress={() => {setToExerAmtScreen('full')}}>
            <Text>FULL</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.navContainer}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} style={styles.nav} options={{ headerTitle: 'DB Randomizer',  headerRight: () => ( <TouchableOpacity onPress={() => {SheetManager.show("routine_sheet")}}><Text>+</Text></TouchableOpacity>
        //   <View style={{flexDirection:"row"}}>
        //     <TouchableOpacity style={{margin: 10}} onPress={() => {SheetManager.show("routine_sheet")}}><Text>+</Text></TouchableOpacity>
        //     <TouchableOpacity onPress={() => {}}><Text>+</Text></TouchableOpacity>
        //  </View>
        )}}/>
        <Stack.Screen name='ExerAmt' component={ExerAmtScreen} style={styles.nav} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
