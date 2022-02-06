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


function HomeScreen({navigation, route}) {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {

      if (route.params?.exerciseList) {
        showExercises(route.params?.exerciseList);
      }

  }, [route.params?.exerciseList])


  const setToExerAmtScreen = (pickedRoutine) => {
    SheetManager.hideAll();
    navigation.navigate('ExerAmt', pickedRoutine);
  }

  const showExercises = (data) => {
    setExercises(data);
  }

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        {exercises.map((exercise, index) => 
          <ExerciseDetail key={index} name={exercise}/>
            // <View key={index}>
            //     <Text>{exercise}</Text>
            // </View>
        )}
      </ScrollView>
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
