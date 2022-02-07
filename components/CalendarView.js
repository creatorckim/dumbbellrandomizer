import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';

function CalendarView(props) {

    const [workoutDays, setWorkoutDays] = useState({});

    useEffect(() => {
        if (props.dateArray && props.dateArray[0]) {
            markDays(props.dateArray)
          }
    }, [props.dateArray.length != 0])

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

    return (
        <Calendar
            disableAllTouchEventsForDisabledDays={true}
            enableSwipeMonths={true}
            markedDates={workoutDays}
            onDayPress={day => {
                for (let i = 0; i < props.dateArray.length; i++) {
                    if (day.dateString == props.dateArray[i].date) {
                        // console.log(props.dateArray[i].date)
                        props.navigation.navigate('WorkoutDate', props.dateArray[i]);
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
    )
}

export default CalendarView;