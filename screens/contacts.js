import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, PermissionsAndroid } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactsList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        requestContactPermission();
    }, []);

    const requestContactPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts Permission',
                    message: 'This app needs access to your contacts.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                loadContacts();
            } else {
                console.log('Contacts permission denied');
            }
        } else {
            loadContacts();
        }
    };

    const loadContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
            });
            if (data.length > 0) {
                setContacts(data);
            }
        } else {
            console.log('Contacts permission denied');
        }
    };

    const renderContact = ({ item }) => {
        if (item && item.phoneNumbers && item.name) {
            return (
                <View>
                    <Text>{item.name}</Text>
                    {item.phoneNumbers.map((phoneNumber, index) => (
                        <Text key={index}>{phoneNumber.number}</Text>
                    ))}
                </View>
            );
        } else {
            return (
                <View>
                    <Text>error loading contact</Text>

                </View>
            );
        }

    };

    return (
        <FlatList
            data={contacts}
            renderItem={renderContact}
            keyExtractor={(item) => item.id}
        />
    );
}
