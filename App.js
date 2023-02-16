// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleScreen from './screens/example'
import HomeScreen from './screens/home'
import DetailsScreen from './screens/details'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Example" component={ExampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;