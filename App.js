import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import useBeforeLaunching from "./src/hooks/useBeforeLaunching";
import { LoadingScreen } from "./src/screens/loadingScreen";
import { HomeScreen } from "./src/screens/homeScreen";
import { ProfileScreen } from "./src/screens/profileScreen";
import { AuthScreen } from "./src/screens/authScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    const [isLoaded, isAuthenticated] = useBeforeLaunching();

    if (!isLoaded) {
        return <LoadingScreen />;
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={isAuthenticated ? "Home" : "Authentication"}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Authentication" component={AuthScreen} options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
