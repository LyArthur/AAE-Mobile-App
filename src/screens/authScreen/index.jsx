import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {Login} from "./components";

export const AuthScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={require("./images/icon.png")} style={styles.logo}/>
            </View>
            <View style={styles.lowerContainer}>
                <Login navigation={navigation}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: '#f8f9fa',
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    lowerContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 20,
    },
});