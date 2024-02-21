import * as SecureStore from "expo-secure-store";
import {Alert} from "react-native";

const API_BASE_URL = 'https://aaedev.com/extranet-membres/wp-json';
export const authenticate = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/jwt-auth/v1/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    const responseData = await response.json();
    const jwtToken = responseData.token;
    if (jwtToken) {
        await SecureStore.setItemAsync('jwtToken', jwtToken)
    } else {
        throw "Erreur";
        console.error('Erreur lors de l\'authentifidsfsfcation:',jwtToken);
        Alert.alert('Erreur', 'Identifiants incorrects.');
    }
};