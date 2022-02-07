import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CalendarView({navigation}) {

    const [workoutDays, setWorkoutDays] = useState({});
    const [dateArray, setDateArray] = useState([]);

    useEffect(() => {
      getAllData();
    }, [])

    useEffect(() => {
        if (dateArray && dateArray[0]) {
            markDays(dateArray)
          }
    }, [dateArray.length != 0])

    const markDays = (array) => {
        let customMarkedDates = {};
        array.map((day) => {
            customMarkedDates[day.date] = {
                selected: true,
                selectedColor: '#af216e'
            };
        });

        setWorkoutDays(customMarkedDates);

    }

    const getAllData = async () => {
        try {  
          const keys = await AsyncStorage.getAllKeys();  
          const resultArray = [];
          await AsyncStorage.multiGet(keys).then(key => {
            key.forEach(data => {
              let tempObj = JSON.parse(data[1]);
              resultArray.push(tempObj);
            });
          });
    
          setDateArray(resultArray);
    
       } catch (e) {
          console.log(e);
       }
      }

    return (
        <View style={{backgroundColor: '#131620', width: '100%', height: '100%'}}>
            <Calendar
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
                markedDates={workoutDays}
                onDayPress={day => {
                    for (let i = 0; i < dateArray.length; i++) {
                        if (day.dateString == dateArray[i].date) {
                            navigation.navigate('WorkoutDate', dateArray[i]);
                        }
                    }
                }}
                theme={{
                    backgroundColor: '#131620',
                    calendarBackground: '#131620',
                    arrowColor: '#fff',
                    textSectionTitleColor: '#fff',
                    monthTextColor: '#fff',
                    dayTextColor: '#fff',
                    todayTextColor: '#af216e',
                    textDisabledColor: '#808080',
                }}
                style={{
                    width: '100%',
                    marginTop: 80,
                }}
            />
        </View>
    )
}

export default CalendarView;