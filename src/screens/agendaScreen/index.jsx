import {StyleSheet, View} from "react-native";
import React from "react";
import {ShowEvents} from "./components";

export const AgendaScreen = ({}) => {
    return (
        <View style={styles.container}>
            <ShowEvents />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    textContainer: {
        marginBottom: 20,
    },
});