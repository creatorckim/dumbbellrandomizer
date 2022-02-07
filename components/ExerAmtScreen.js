import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import exerAmtScreenStyles from '../components/exerAmtScreenStyles';
import { back, bicep, forearm, postdelt, trapezius, chest, shoulder, tricep, quadricep, hamstring, glute, calf, ab, oblique } from '../exercises';


function ExerAmtScreen({ navigation, route }) {

    const [muscleGroup, setMuscleGroup] = useState([]);
    const [exercises, setExercises] = useState([]);

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

    const createRoutine = () => {
        let tempExerciseArray = [];
        for (let i = 0; i < muscleGroup.length; i++) {
            switch(muscleGroup[i][0]) {
                case 'back':
                    pickRandomExercise(muscleGroup[i][1], back, tempExerciseArray);
                    break;
                case 'bicep':
                    pickRandomExercise(muscleGroup[i][1], bicep, tempExerciseArray);
                    break;
                case 'forearm':
                    pickRandomExercise(muscleGroup[i][1], forearm, tempExerciseArray);
                    break;
                case 'postdelt':
                    pickRandomExercise(muscleGroup[i][1], postdelt, tempExerciseArray);
                    break;
                case 'trapezius':
                    pickRandomExercise(muscleGroup[i][1], trapezius, tempExerciseArray);
                    break;
                case 'chest':
                    pickRandomExercise(muscleGroup[i][1], chest, tempExerciseArray);
                    break;
                case 'shoulder':
                    pickRandomExercise(muscleGroup[i][1], shoulder, tempExerciseArray);
                    break;
                case 'tricep':
                    pickRandomExercise(muscleGroup[i][1], tricep, tempExerciseArray);
                    break;
                case 'quadricep':
                    pickRandomExercise(muscleGroup[i][1], quadricep, tempExerciseArray);
                    break;
                case 'hamstring':
                    pickRandomExercise(muscleGroup[i][1], hamstring, tempExerciseArray);
                    break;
                case 'glute':
                    pickRandomExercise(muscleGroup[i][1], glute, tempExerciseArray);
                    break;
                case 'calf':
                    pickRandomExercise(muscleGroup[i][1], calf, tempExerciseArray);
                    break;
                case 'ab':
                    pickRandomExercise(muscleGroup[i][1], ab, tempExerciseArray);
                    break;
                case 'oblique':
                    pickRandomExercise(muscleGroup[i][1], oblique, tempExerciseArray);
                    break;
                default:
                    break;

            }
        }

        setExercises(tempExerciseArray);

        return tempExerciseArray;
    }

    const pickRandomExercise = (iteration, bodypart, array) => {
        let numberOfExercises = iteration;
        if (numberOfExercises > bodypart.length) {
            numberOfExercises = bodypart.length
        }
        let set = new Set();
        while (set.size < numberOfExercises) {
            let randomIndex = Math.floor(Math.random() * bodypart.length);
            set.add(bodypart[randomIndex].name);
        }

        let setArray = [...set];

        array = array.push(...setArray);

    }

    return (
        <View style={exerAmtScreenStyles.container}>
            <Text style={exerAmtScreenStyles.amountText}>Add Amount Of Exercises Per Muscle Group</Text>
            <ScrollView style={exerAmtScreenStyles.scrollView}>
                {muscleGroup.map((muscle, index) => 
                    <View key={index} style={exerAmtScreenStyles.exerciseView}>
                        <Text style={exerAmtScreenStyles.exerciseText}>{muscle[0].charAt(0).toUpperCase() + muscle[0].slice(1)}</Text>
                        <NumericInput totalWidth={120} totalHeight={40}  textColor={'#fff'} rounded borderColor={'#af216e'} leftButtonBackgroundColor={'#af216e'} rightButtonBackgroundColor={'#af216e'} minValue={0} maxValue={5} value={muscle[1]} onChange={value => {updateMuscleGroup([muscle[0], value])}} />
                    </View>
                )}
            </ScrollView>
            <View style={exerAmtScreenStyles.actionBarContainer}>
                <TouchableOpacity onPress={() => {navigation.navigate({name: 'Home', params: {exerciseList : createRoutine()}, merge: true})}}>
                <View style={exerAmtScreenStyles.addButtonContainer}>
                    <Text style={exerAmtScreenStyles.addButton}>+</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExerAmtScreen;