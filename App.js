import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import ExerAmtScreen from './components/ExerAmtScreen';
import NewRoutineScreen from './components/NewRoutineScreen';
import ExerciseDetail from './components/ExerciseDetail';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({navigation, route}) {

  const [routine, setRoutine] = useState('');
  const [exercises, setExercises] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [exerciseArray, setExerciseArray] = useState([]);

  useEffect(() => {
    getAllData();
  })


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
    let tempObj = {'key': randomKey, 'routine': routine, 'exerciseArray': array};

    saveRoutine(tempObj);
  }

  const saveRoutine = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(value.key, jsonValue)
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
          resultArray.push(JSON.parse(data[1]));
        });
      });

      console.log(resultArray);
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
              <ExerciseDetail key={index} name={exercise} exerciseArray={exerciseArray}/>
            )}
        </ScrollView> : <Text>No exercises</Text>
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
        <Stack.Screen name='Home' component={HomeScreen} style={styles.nav} options={{ headerTitle: 'DB Randomizer', headerRight: () => (<TouchableOpacity onPress={() => {SheetManager.show("routine_sheet")}}><Text>+</Text></TouchableOpacity>)}}/>
        <Stack.Screen name='ExerAmt' component={ExerAmtScreen} style={styles.nav} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='NewRoutine' component={NewRoutineScreen} style={styles.nav} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
