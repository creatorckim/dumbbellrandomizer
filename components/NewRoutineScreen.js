import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { back, bicep, forearm, postdelt, trapezius, chest, shoulder, tricep, quadricep, hamstring, glute, calf, ab, oblique } from '../exercises';
import newRoutineScreenStyles from '../components/newRoutineScreenStyles';



function NewRoutineScreen({ navigation, route }) {

    const [exercises, setExercises] = useState([]);
    const [exerciseAmt, setExerciseAmt] = useState(route.params);


    useEffect(() => {

        let tempExerciseArray = [];
        for (let i = 0; i < exerciseAmt.length; i++) {
            switch(exerciseAmt[i][0]) {
                case 'back':
                    pickRandomExercise(exerciseAmt[i][1], back, tempExerciseArray);
                    break;
                case 'bicep':
                    pickRandomExercise(exerciseAmt[i][1], bicep, tempExerciseArray);
                    break;
                case 'forearm':
                    pickRandomExercise(exerciseAmt[i][1], forearm, tempExerciseArray);
                    break;
                case 'postdelt':
                    pickRandomExercise(exerciseAmt[i][1], postdelt, tempExerciseArray);
                    break;
                case 'trapezius':
                    pickRandomExercise(exerciseAmt[i][1], trapezius, tempExerciseArray);
                    break;
                case 'chest':
                    pickRandomExercise(exerciseAmt[i][1], chest, tempExerciseArray);
                    break;
                case 'shoulder':
                    pickRandomExercise(exerciseAmt[i][1], shoulder, tempExerciseArray);
                    break;
                case 'tricep':
                    pickRandomExercise(exerciseAmt[i][1], tricep, tempExerciseArray);
                    break;
                case 'quadricep':
                    pickRandomExercise(exerciseAmt[i][1], quadricep, tempExerciseArray);
                    break;
                case 'hamstring':
                    pickRandomExercise(exerciseAmt[i][1], hamstring, tempExerciseArray);
                    break;
                case 'glute':
                    pickRandomExercise(exerciseAmt[i][1], glute, tempExerciseArray);
                    break;
                case 'calf':
                    pickRandomExercise(exerciseAmt[i][1], calf, tempExerciseArray);
                    break;
                case 'ab':
                    pickRandomExercise(exerciseAmt[i][1], ab, tempExerciseArray);
                    break;
                case 'oblique':
                    pickRandomExercise(exerciseAmt[i][1], oblique, tempExerciseArray);
                    break;
                default:
                    break;

            }
        }

        setExercises(tempExerciseArray);

        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'NewRoutine' }],
        // });

    }, []);

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
        <ScrollView>
            <View style={newRoutineScreenStyles.container}>
                {exercises.map((exercise, index) => 
                    <Text key={index}>{exercise}</Text>
                )}
            </View>
        </ScrollView>
        
    )
}

export default NewRoutineScreen;