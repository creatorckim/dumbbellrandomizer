import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';
import exerciseDetailStyles from './ExerciseDetailStyles';


function ExerciseDetail(props) {

    const[reps, setReps] = useState('');
    const[weight, setWeight] = useState('');
    const [sets, setSets] = useState([]);

    const saveSets = (repInput, weightInput) => {
        let tempArray = [...sets];
        // let tempExerciseArray = props.exerciseArray;
        // props.setExerciseArray(...tempExerciseArray, [props.name, repInput, weightInput]);
        props.exerciseArray.push([props.name, repInput, weightInput]);
        tempArray.push([props.name, repInput, weightInput]);
        setSets(tempArray);
        setReps('');
        setWeight('');

    }

    return (
        <View style={exerciseDetailStyles.container}>
            <Text style={exerciseDetailStyles.text}>{props.name}</Text>
            {sets.map((set, index) =>
                <View style={exerciseDetailStyles.addSetContainer} key={index}>
                    <Text style={exerciseDetailStyles.text}>Rep:</Text>
                    <Text style={exerciseDetailStyles.importantText}>{set[1]}</Text>
                    <Text style={exerciseDetailStyles.text}>Weight:</Text>
                    <Text style={exerciseDetailStyles.importantText}>{set[2]}</Text>
                </View>
            )}
            <View style={exerciseDetailStyles.addSetContainer}>
                <Text style={exerciseDetailStyles.text}>REPS: </Text>
                <TextInput style={exerciseDetailStyles.textInput} keyboardType='numeric' value={reps} onChangeText={(value) => {setReps(value)}}/>
                <Text style={exerciseDetailStyles.text}>LBS: </Text>
                <TextInput style={exerciseDetailStyles.textInput} keyboardType='numeric' value={weight} onChangeText={(value) => {setWeight(value)}}/>
                <TouchableOpacity  style={exerciseDetailStyles.addSetButton} onPress={() => {
                    if (reps != '') {
                        let newWeight;
                        if (weight == '') {
                            newWeight = '0';
                        } else {
                            newWeight = weight;
                        }
                        saveSets(reps, newWeight);
                    }
                }}><Text style={exerciseDetailStyles.addButtonText}>ADD SET</Text></TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ExerciseDetail;