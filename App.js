// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleScreen from './screens/example'
import HomeScreen from './screens/home'
import DetailsScreen from './screens/details'
import { globalStyles } from './styles/global';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: globalStyles.headerStyle,          
          headerTitleStyle: globalStyles.headerTitleStyle,          
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview', }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="Example"
          component={ExampleScreen}
          options={{ title: 'Example' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;