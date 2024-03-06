import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import * as SecureStore from "expo-secure-store";
import {useTranslation} from "react-i18next";
import LoadingScreen from "../loadingScreen";

export const HomeScreen = ({navigation}) => {
    const [t] = useTranslation("homeScreen");
    const [username, setUsername] = null;
    useEffect(() => {
        const getUsername = async () => {
            const username = await SecureStore.getItem("username");
            setUsername(username);
        }
        getUsername();
    }, []);
    if (username === null) {
        return (
            <LoadingScreen/>
        );
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('./images/icon.png')}
                style={styles.logo}
            />
            <Text style={styles.welcomeText}>{t('welcome') + " " + username} </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={t('button.agenda')}
                    color="#6495ED"
                    onPress={() => navigation.navigate('Agenda')}
                />
                <Button
                    title={t('button.directory')}
                    color="#6495ED"
                    onPress={() => navigation.navigate('AnnuaireContainer')}
                />
                <Button
                    title={t('button.profile')}
                    color="#6495ED"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 20,
        marginBottom: 30,
        textTransform: "capitalize"
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'space-between',
        gap: 15
    },
});
