import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { back, bicep, forearm, postdelt, trapezius, chest, shoulder, tricep, quadricep, hamstring, glute, calf, ab, oblique } from './exercises';


function RoutineScreen() {
  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.actionBarContainer}>
          {/* <TouchableOpacity onPress={() => {navigation.navigate('NewRoutine')}}> */}
          <TouchableOpacity>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.navContainer}>
      <Stack.Navigator initialRouteName='Routine'>
        <Stack.Screen name='Routine' component={RoutineScreen} style={styles.nav} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='NewRoutine' component={NewRoutineScreen} style={styles.nav} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
