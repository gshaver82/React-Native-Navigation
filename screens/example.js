
import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { globalStyles } from '../styles/global';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ExampleScreen({ route, navigation }) {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handlePicker = (event, selectedDate) => {
        setShowPicker(Platform.OS === 'ios'); // Hide picker on iOS when done selecting
        if (selectedDate) {
            setDate(selectedDate);
            console.log('Selected time:', selectedDate);
        }
    };

    const { itemId, otherParam } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>Example screen</Text>
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode="time"
                    is24Hour={false} // Set to true if you want to use 24-hour time format
                    display="default"
                    onChange={handlePicker}
                />
            )}
            <Text style={globalStyles.titleText}>itemId: {JSON.stringify(route.params.itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go back to home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button title="Set Time" onPress={() => setShowPicker(true)} />
            <Text>{date.toTimeString()} 

            </Text>

        </View>
    );
}