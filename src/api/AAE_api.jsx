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
        console.error('Erreur lors de l\'authentifidsfsfcation:', jwtToken);
        Alert.alert('Erreur', 'Identifiants incorrects.');
    }
};
export const validateToken = async (token) => {
    const response = await fetch(`${API_BASE_URL}/jwt-auth/v1/token/validate`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const code = (await response.json()).code;
    if (code === "jwt_auth_valid_token") {
        return true
    }
    return false;
}
export const getAnnuaire = async () => {
    const token = await SecureStore.getItemAsync('jwtToken');
    const response = await fetch(`${API_BASE_URL}/api/annuaire`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!data.StatusCode === 1000){
        return false
    }
    return data;
}
export const getProfile = async () => {
    const token = await SecureStore.getItemAsync('jwtToken');
    const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    if (!data.StatusCode === 1000) {
        return false
    }
    return data;
}