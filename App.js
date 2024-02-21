import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen} from "./src/screens/loadingScreen";
import {HomeScreen} from "./src/screens/homeScreen";
import {ProfileScreen} from "./src/screens/profileScreen";
import {AuthScreen} from "./src/screens/authScreen";
import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

export default function App() {
    SecureStore.deleteItemAsync("jwtToken");
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
