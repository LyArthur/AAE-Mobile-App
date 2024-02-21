import {View, Text, StyleSheet, StatusBar} from "react-native";
import React from "react";
import {Login, Register} from "./components";

export const AuthScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Login navigation={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        gap:10
    },
    buttonContainer: {
        marginBottom: 20, // Espacement entre le texte et le bord inférieur de l'écran
    },
});
export default AuthScreen;