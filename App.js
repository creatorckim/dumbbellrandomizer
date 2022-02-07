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
import WorkoutDate from './components/WorkoutDate';


function HomeScreen({navigation, route}) {

  const [routine, setRoutine] = useState('');
  const [exercises, setExercises] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [exerciseArray, setExerciseArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);

  useEffect(() => {
    getAllData();
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
      getAllData();
    } catch (e) {
      console.log(e);
    }

  }

  const getAllData = async () => {
    try {  
      const keys = await AsyncStorage.getAllKeys();  
      const resultArray = [];
      await AsyncStorage.multiGet(keys).then(key => {
        key.forEach(data => {
          // resultArray.push(JSON.parse(data[1]));
          let tempObj = JSON.parse(data[1]);
          // console.log(JSON.parse(data[1]));
          resultArray.push(tempObj);
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
      <StatusBar style="light" />
      {
        exercises.length != 0 ? 
          <ScrollView style={styles.scrollView}>
            {exercises.map((exercise, index) => 
              <ExerciseDetail key={index} name={exercise} exerciseArray={exerciseArray} setExerciseArray={setExerciseArray}/>
            )}
        </ScrollView> : <CalendarView dateArray={dateArray} navigation={navigation}/>
      }
      {
        showButton ? 
        <View style={styles.actionBarContainer}>
          <TouchableOpacity onPress={() => {routineObj(routine, exerciseArray); setExercises([]); setShowButton(false)}}>
            <View style={styles.addButtonContainer}>
                <Text style={styles.addButton}>Save</Text>
            </View>
          </TouchableOpacity>
        </View> : null
      }
      <ActionSheet containerStyle={styles.actionsheet} id="routine_sheet">
        <View style={styles.sheetButtons}>
          <TouchableOpacity style={styles.sheetBtnTO} onPress={() => {setToExerAmtScreen('push')}}>
            <Text style={styles.buttonText}>PUSH</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity style={styles.sheetBtnTO} onPress={() => {setToExerAmtScreen('pull')}}>
            <Text style={styles.buttonText}>PULL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity style={styles.sheetBtnTO} onPress={() => {setToExerAmtScreen('upper')}}>
              <Text style={styles.buttonText}>UPPER</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity style={styles.sheetBtnTO} onPress={() => {setToExerAmtScreen('lower')}}>
            <Text style={styles.buttonText}>LOWER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sheetButtons}>
          <TouchableOpacity style={styles.sheetBtnTO} onPress={() => {setToExerAmtScreen('full')}}>
            <Text style={styles.buttonText}>FULL</Text>
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
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'DB Randomizer', headerTitleStyle: {color: '#fff'}, headerStyle: {backgroundColor: '#131620'},  headerRight: () => ( <TouchableOpacity onPress={() => {SheetManager.show("routine_sheet")}}><Text style={styles.randomButton}>+</Text></TouchableOpacity>
        )}}/>
        <Stack.Screen name='ExerAmt' component={ExerAmtScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='WorkoutDate' component={WorkoutDate} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
