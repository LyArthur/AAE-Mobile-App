import React, { useState, useEffect } from "react";
import { Button, Linking, ScrollView, StyleSheet } from "react-native";
import LoadingScreen from "../../loadingScreen";
import * as SecureStore from "expo-secure-store";

export const ShowProfile = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const jwtToken = await SecureStore.getItemAsync('jwtToken');
            setToken(jwtToken);
        };
        getToken();
    }, []); // Videz le tableau de dépendances pour exécuter l'effet une seule fois après le montage du composant

    if (token === null) {
        return <LoadingScreen/>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button
                title="Afficher mon profil"
                onPress={() => Linking.openURL(`https://aaedev.com/?jwt=${token}`)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    }
});
