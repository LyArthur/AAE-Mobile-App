import {StatusBar, StyleSheet, Text, Button, View} from "react-native";
import React from "react";

export const HomeScreen = ({navigation}) => {/*
    const [isLoaded, isAuthenticated] = useBeforeLaunching();

    if (!!checkLoadAndAuthentication(isLoaded, isAuthenticated)){
        if (checkLoadAndAuthentication(isLoaded, isAuthenticated) !== "Authentication"){
            return checkLoadAndAuthentication(isLoaded, isAuthenticated)
        } else {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Authentication' }]
            });
        }
    }*/
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginBottom: 20, // Espacement entre le texte et le bord inférieur de l'écran
    },
});