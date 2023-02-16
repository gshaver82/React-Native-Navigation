
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ExampleScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>itemId: {JSON.stringify(route.params.itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go back to home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}