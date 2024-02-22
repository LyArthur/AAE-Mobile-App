import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import useBeforeLaunching from "./src/hooks/useBeforeLaunching";
import {LoadingScreen} from "./src/screens/loadingScreen";
import {HomeScreen} from "./src/screens/homeScreen";
import {ProfileScreen} from "./src/screens/profileScreen";
import {AuthScreen} from "./src/screens/authScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthenticatedNavigator} from "./src/navigatorContainer/authenticatedContainer";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoaded, isAuthenticated] = useBeforeLaunching();

    if (!isLoaded) {
        return <LoadingScreen/>;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated ? "AuthenticatedNavigator" : "Authentication"}>
                <Stack.Screen name="Authentication" component={AuthScreen}
                              options={{drawerItemStyle: {display: 'none'}, headerShown: false}}/>
                <Stack.Screen name="AuthenticatedNavigator" component={AuthenticatedNavigator}
                              options={{drawerItemStyle: {display: 'none'}, headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
