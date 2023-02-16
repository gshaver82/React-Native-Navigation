
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go back to home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}