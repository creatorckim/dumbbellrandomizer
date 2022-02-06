import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import exerAmtScreenStyles from '../components/exerAmtScreenStyles';



function ExerAmtScreen({ navigation, route }) {

    const [muscleGroup, setMuscleGroup] = useState([]);

    useEffect(() => {

        const tempGroup = [['back', 2], ['postdelt', 1], ['bicep', 2], ['forearm', 0], ['trapezius', 0], ['chest', 2], ['shoulder', 2], ['tricep', 2], ['quadricep', 2], ['hamstring', 2], ['glute', 1], ['calf', 1], ['ab', 1], ['oblique', 1]];

        let temp = [];
        switch (route.params) {
            case 'push':
                temp.push(tempGroup[5]);
                temp.push(tempGroup[6]);
                temp.push(tempGroup[7]);
                temp.push(tempGroup[12]);
                temp.push(tempGroup[13]);
                break;
            case 'pull':
                temp.push(tempGroup[0]);
                temp.push(tempGroup[1]);
                temp.push(tempGroup[2]);
                temp.push(tempGroup[3]);
                temp.push(tempGroup[4]);
                temp.push(tempGroup[12]);
                temp.push(tempGroup[13]);
                break;
            case 'upper':
                temp.push(tempGroup[0]);
                temp.push(tempGroup[1]);
                temp.push(tempGroup[2]);
                temp.push(tempGroup[3]);
                temp.push(tempGroup[4]);
                temp.push(tempGroup[5]);
                temp.push(tempGroup[6]);
                temp.push(tempGroup[7]);
                temp.push(tempGroup[12]);
                temp.push(tempGroup[13]);
                break;
            case 'lower':
                temp.push(tempGroup[8]);
                temp.push(tempGroup[9]);
                temp.push(tempGroup[10]);
                temp.push(tempGroup[11]);
                temp.push(tempGroup[12]);
                temp.push(tempGroup[13]);

                break;
            case 'full':
                temp = tempGroup;
                break;
            default:
                break;
        }

        setMuscleGroup(temp);

    }, [])

    const updateMuscleGroup = (muscle) => {
        let tempGroup = [];
        for (let i = 0; i < muscleGroup.length; i++) {
            if (muscle[0] == muscleGroup[i][0]) {
                tempGroup.push(muscle);
            } else {
                tempGroup.push(muscleGroup[i]);
            }
            
        }

        setMuscleGroup(tempGroup);
    }

    const setToNewRoutineScreen = (group) => {
        navigation.navigate('NewRoutine', group);
      }

    return (
        <View style={exerAmtScreenStyles.container}>
            <ScrollView style={exerAmtScreenStyles.scrollView}>
                {muscleGroup.map((muscle, index) => 
                    <View key={index}>
                        <Text>{muscle[0]}</Text>
                        <NumericInput minValue={0} maxValue={5} value={muscle[1]} onChange={value => {updateMuscleGroup([muscle[0], value])}} />
                    </View>
                )}
            </ScrollView>
            <View style={exerAmtScreenStyles.actionBarContainer}>
                <TouchableOpacity onPress={() => {setToNewRoutineScreen(muscleGroup)}}>
                <View style={exerAmtScreenStyles.addButtonContainer}>
                    <Text style={exerAmtScreenStyles.addButton}>+</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExerAmtScreen;