import React, {useEffect, useState} from "react";
import {Button, Linking, ScrollView, StyleSheet} from "react-native";
import {LoadingScreen} from "../../loadingScreen";
import * as SecureStore from "expo-secure-store";
import {Logout} from "./logout";
import {useTranslation} from "react-i18next";

export const ShowProfile = ({navigation}) => {
    const [token, setToken] = useState(null);
    const {t} = useTranslation("profileScreen");

    useEffect(() => {
        const getToken = async () => {
            const jwtToken = await SecureStore.getItemAsync('jwtToken');
            setToken(jwtToken);
        };
        getToken();
    }, []);

    if (token === null) {
        return <LoadingScreen/>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button
                title={t('showProfile')}
                onPress={() => Linking.openURL(`https://academieairespace.com/?jwt=${token}`)}
            />
            <Logout navigation={navigation}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        gap: 20,
    }
});
