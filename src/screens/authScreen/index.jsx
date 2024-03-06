import {View, StyleSheet, StatusBar} from "react-native";
import React from "react";
import {Login} from "./components";

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
        backgroundColor: '#f8f9fa',
        gap:10
    },
    buttonContainer: {
        marginBottom: 20,
    },
});
export default AuthScreen;