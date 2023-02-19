
import { View, Text, Button, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {

    const [showModal, setshowModal] = useState(false);
    return (

        <View style={globalStyles.container}>
            <Modal visible={showModal} animationType='slide' onRequestClose={() => setshowModal(false)}>
                <View>
                    <Text>
                        MODAL HERE
                    </Text>
                    <TouchableOpacity
                        style={[globalStyles.TouchableOpacitybutton, { flexDirection: 'row' }]}
                        onPress={() => {
                            setshowModal(false)
                        }}>
                        <Text style={globalStyles.buttonText}>hide modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Text style={globalStyles.screenTitle}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'otherParam text',
                    });
                }}
            />

            <TouchableOpacity
                style={[globalStyles.TouchableOpacitybutton, { flexDirection: 'row' }]}
                onPress={() => {
                    navigation.navigate('Example');
                }}>
                <AntDesign name="infocirlce" size={24} color="white" style={{ marginRight: 10 }} />
                <Text style={globalStyles.buttonText}>Go to ExampleScreen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[globalStyles.TouchableOpacitybutton, { flexDirection: 'row' }]}
                onPress={() => {
                    navigation.navigate('Forms');
                }}>
                <Text style={globalStyles.buttonText}>Go to Forms</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[globalStyles.TouchableOpacitybutton, { flexDirection: 'row' }]}
                onPress={() => {
                    navigation.navigate('Contacts');
                }}>
                <Text style={globalStyles.buttonText}>Go to Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[globalStyles.TouchableOpacitybutton, { flexDirection: 'row' }]}
                onPress={() => {
                    setshowModal(true)
                }}>
                <Text style={globalStyles.buttonText}>show modal</Text>
            </TouchableOpacity>
        </View>
    );
}