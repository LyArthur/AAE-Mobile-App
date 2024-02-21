import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen} from "./src/screens/loadingScreen";
import {HomeScreen} from "./src/screens/homeScreen";
import {ProfileScreen} from "./src/screens/profileScreen";
import {AuthScreen} from "./src/screens/authScreen";
import {useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            // Vérifier l'authentification de l'utilisateur, par exemple en vérifiant la présence d'un token JWT
            const token = await SecureStore.getItemAsync("jwtToken"); // Utilisez votre fonction pour récupérer le token JWT

            if (token) {
                // L'utilisateur est authentifié
                setIsAuthenticated(true);
            }

            setIsLoading(false);
        };

        checkAuthentication();
    }, []);

    if (isLoading) {
        return <LoadingScreen/>;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Authentication"}>
                <Stack.Screen name="Loading" component={LoadingScreen}/>
                <Stack.Screen name="Authentication" component={AuthScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
