import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useBeforeLaunching from "./src/hooks/useBeforeLaunching";
import {LoadingScreen} from "./src/screens/loadingScreen";
import {AuthScreen} from "./src/screens/authScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthenticatedNavigator} from "./src/navigatorContainer/authenticated/authenticatedContainer";
import { i18n } from "./src/i18n/i18n";

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
