
import React, { useState } from 'react';
import { View, Text, Button, Platform, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import DateTimePicker from '@react-native-community/datetimepicker';
import Card from '../shared/card';

export default function ExampleScreen({ route, navigation }) {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [alarmArray, setalarmArray] = useState([]);

    const handlePicker = (event, selectedDate) => {
        setShowPicker(Platform.OS === 'ios'); // Hide picker on iOS when done selecting
        if (selectedDate) {
            console.log('Selected time:', selectedDate);
            setDate(selectedDate);
            setalarmArray([...alarmArray, selectedDate.toString()]);
            // setalarmArray([...alarmArray, selectedDate.hour() + ":" + selectedDate.minute().toString().padStart(2, '0')]);
            console.log('alarmArray', alarmArray);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>Example screen</Text>
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={handlePicker}
                />
            )}
            <Button title="Set Time" onPress={() => setShowPicker(true)} />
            {alarmArray.length > 0 ? (
                <FlatList data={alarmArray} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => console.log("pressed item")}>
                        {/* <Card> */}
                            <Text style={globalStyles.alarmText}>{item}</Text>
                        {/* </Card> */}
                    </TouchableOpacity>
                )} />
            ) : <Text>nothing yet </Text>}


        </View>
    );
}