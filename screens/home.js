
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    console.log('details button pushed');
                    navigation.navigate('Details');
                }}
            />
            <Button
                title="Go to ExampleScreen"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Example', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </View>
    );
}