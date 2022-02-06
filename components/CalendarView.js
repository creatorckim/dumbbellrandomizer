import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalendarView(props) {

    const [workoutDays, setWorkoutDays] = useState({});

    useEffect(() => {
        // console.log(props.dateArray);
        markDays(props.dateArray)
    }, [props.dateArray])

    const markDays = (array) => {
        let customMarkedDates = {};
        array.map((day) => {
            customMarkedDates[day] = {
                selected: true,
                selectedColor: '#ffc45d'
            };
        });

        setWorkoutDays(customMarkedDates);

    }

    return (
        <View>
            {props.dateArray.map((date, index) => {
                <Text key={index}>{date}</Text>
            })}
            <Calendar
                    disableAllTouchEventsForDisabledDays={true}
                    enableSwipeMonths={true}
                    markedDates={workoutDays}
                    theme={{
                        backgroundColor: '#191B1D',
                        calendarBackground: '#191B1D',
                        arrowColor: '#ffc45d',
                        textSectionTitleColor: '#ffc45d',
                        monthTextColor: '#ffc45d',
                        selectedDayTextColor: '#191B1D',
                        dayTextColor: '#fff',
                        todayTextColor: '#ffc45d',
                        textDisabledColor: '#808080',
                    }}
                    style={{
                        width: '100%',
                    }}
                />
        </View>
    )
}

export default CalendarView;