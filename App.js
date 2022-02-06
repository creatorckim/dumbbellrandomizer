import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { back, bicep, forearm, postdelt, trapezius, chest, shoulder, tricep, quadricep, hamstring, glute, calf, ab, oblique } from './exercises';
import ExerAmtScreen from './components/ExerAmtScreen';
import NewRoutineScreen from './components/NewRoutineScreen';


function HomeScreen({navigation, route}) {


  const setToExerAmtScreen = (pickedRoutine) => {
    SheetManager.hideAll();
    navigation.navigate('ExerAmt', pickedRoutine);
  }

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.actionBarContainer}>
        <TouchableOpacity onPress={() => {SheetManager.show("routine_sheet");}}>
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
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
        <Stack.Screen name='Home' component={HomeScreen} style={styles.nav} options={{ headerShown: false }}/>
        <Stack.Screen name='ExerAmt' component={ExerAmtScreen} style={styles.nav} options={{ headerShown: false }}/>
        <Stack.Screen name='NewRoutine' component={NewRoutineScreen} style={styles.nav} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
