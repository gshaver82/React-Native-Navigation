
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    console.log('details button pushed');
                    navigation.navigate('Details');
                }}
            />

            <TouchableOpacity
                style={[globalStyles.button, { flexDirection: 'row' }]}
                onPress={() => {
                    navigation.navigate('Example', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}>
                <AntDesign name="infocirlce" size={24} color="black" style={{ marginRight: 10 }} />
                <Text  style={globalStyles.buttonText}>Go to ExampleScreen</Text>
            </TouchableOpacity>




        </View>
    );
}