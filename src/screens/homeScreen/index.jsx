import {StatusBar, StyleSheet, Text, Button, View} from "react-native";
import React from "react";

export const HomeScreen = ({navigation}) => {
    //todo afficher l'agenda
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
        marginBottom: 20,
    },
});