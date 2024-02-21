import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen} from "./src/screens/loadingScreen";
import {HomeScreen} from "./src/screens/homeScreen";
import {ProfileScreen} from "./src/screens/profileScreen";
import {AuthScreen} from "./src/screens/authScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen name="Loading" component={LoadingScreen}/>
          <Stack.Screen name="Authentication" component={AuthScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
