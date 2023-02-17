
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button style={globalStyles.button}
                title="Go to Details"
                onPress={() => {
                    console.log('details button pushed');
                    navigation.navigate('Details');
                }}
            />

            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => {
                    navigation.navigate('Example', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}>
                <Text style={{ color: 'white' }}>Go to ExampleScreen</Text>
            </TouchableOpacity>



        </View>
    );
}