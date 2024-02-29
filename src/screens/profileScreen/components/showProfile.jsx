import { useState} from "react";
import {Button, Linking, ScrollView, StyleSheet} from "react-native";
import LoadingScreen from "../../loadingScreen";
import * as SecureStore from "expo-secure-store";

export const ShowProfile = () => {
    const [token, setToken] = useState(null);
    const getToken = async () =>{
        const jwtToken = await SecureStore.getItem('jwtToken');
        setToken(jwtToken);
    }
    getToken();
    if (token === null) {
        return <LoadingScreen/>;
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button title={"Afficher mon profile"} onPress={Linking.openURL(`https://aaedev.com/extranet-membres/?jwt=${token}`)}/>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
});