import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native';


function ExerciseDetail(props) {

    const[reps, setReps] = useState('0');
    const[weight, setWeight] = useState('0');
    const [sets, setSets] = useState([]);

    const saveSets = (repInput, weightInput) => {
        let tempArray = [...sets];
        tempArray.push([repInput, weightInput]);
        setSets(tempArray);
        setReps('0');
        setWeight('0');

    }

    return (
        <View>
            <Text>{props.name}</Text>
            {sets.map((set, index) =>
                <View key={index}>
                    <Text>{set[0]}</Text>
                    <Text>{set[1]}</Text>
                </View>
            )}
            <TextInput keyboardType='numeric' value={reps} onChangeText={(value) => {setReps(value)}}/>
            <TextInput keyboardType='numeric'value={weight} onChangeText={(value) => {setWeight(value)}}/>
            <TouchableOpacity onPress={() => {saveSets(reps, weight)}}><Text>Add Set</Text></TouchableOpacity>
        </View>
    )
}

export default ExerciseDetail;