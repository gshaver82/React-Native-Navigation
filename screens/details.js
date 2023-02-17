
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>Details Screen</Text>
            <Button
                title="Go back to home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}