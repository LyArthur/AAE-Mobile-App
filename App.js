import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from "./src/screens/loadingScreen";
import {HomeScreen} from "./src/screens/homeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Loading" component={LoadingScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
