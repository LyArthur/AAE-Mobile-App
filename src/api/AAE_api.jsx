import * as SecureStore from "expo-secure-store";
import {Alert} from "react-native";

const API_BASE_URL = 'https://aaedev.com/extranet-membres/wp-json';
export const authenticate = async (username, password) => {
    try {
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

        // Stocker le token JWT dans le stockage sécurisé
        await SecureStore.setItemAsync('jwtToken', jwtToken);
    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error);
        Alert.alert('Erreur', 'Identifiants incorrects.');
    }
};