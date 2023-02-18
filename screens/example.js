import React, { useState, useEffect } from 'react';
import { View, Text, Button, Platform, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import DateTimePicker from '@react-native-community/datetimepicker';
import Card from '../shared/card';
import moment from 'moment';

export default function ExampleScreen() {

    const [showPicker, setShowPicker] = useState(false);
    const [alarmArray, setalarmArray] = useState([]);

    useEffect(() => {
        console.log('Updated alarmArray:', alarmArray);
    }, [alarmArray]);

    const handlePicker = (event, selectedDate) => {
        setShowPicker(Platform.OS === 'ios');
        if (selectedDate) {
            // const formattedDate = moment(selectedDate).format('h:mm A');
            setalarmArray([...alarmArray, selectedDate]);
        }
    };

    const keyExtractor = (item, index) => {
        return index.toString();
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>Example screen</Text>
            {showPicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={handlePicker}
                />
            )}
            <Button title="Set Time" onPress={() => setShowPicker(true)} />
            {alarmArray.length > 0 ? (
                <FlatList
                    data={alarmArray.sort((a, b) => moment(a, 'h:mm A').diff(moment(b, 'h:mm A')))}
                    keyExtractor={keyExtractor}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => console.log("pressed item")}>
                            <Card>
                                <Text style={globalStyles.alarmText}>{moment(item, 'h:mm A').format('h:mm A')}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            ) : <Text>No alarms set yet</Text>}
        </View>
    );
}
