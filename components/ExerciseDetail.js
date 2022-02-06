import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';


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
        <View>
            <Text>{props.name}</Text>
            {sets.map((set, index) =>
                <View key={index}>
                    <Text>{set[1]}</Text>
                    <Text>{set[2]}</Text>
                </View>
            )}
            <TextInput keyboardType='numeric' placeholder='0' value={reps} onChangeText={(value) => {setReps(value)}}/>
            <TextInput keyboardType='numeric' placeholder='0' value={weight} onChangeText={(value) => {setWeight(value)}}/>
            <TouchableOpacity onPress={() => {
                if (reps != '') {
                    let newWeight;
                    if (weight == '') {
                        newWeight = '0';
                    } else {
                        newWeight = weight;
                    }
                    saveSets(reps, newWeight);
                }
                }}><Text>Add Set</Text></TouchableOpacity>
        </View>
    )
}

export default ExerciseDetail;