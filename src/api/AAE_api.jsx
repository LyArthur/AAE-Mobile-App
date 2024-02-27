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
        console.error('Erreur lors de l\'authentification:', jwtToken);
        Alert.alert('Erreur', 'Identifiants incorrects.');
    }
};
export const validateToken = async (token) => {
    let showAlert = true;
    while (true) {
        try {
            const response = await fetch(`${API_BASE_URL}/jwt-auth/v1/token/validate`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            const code = responseData.code;
            return code === "jwt_auth_valid_token";

        } catch (error) {
            if (showAlert === true) {
                Alert.alert('Erreur', 'La connexion a échoué', [
                    {
                        text: 'Réessayer', onPress: () => {
                            showAlert = true;
                        }
                    }
                ]);
                showAlert = false;
            }
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
};


export const getAnnuaire = async () => {
    const token = await SecureStore.getItemAsync('jwtToken');
    const response = await fetch(`${API_BASE_URL}/api/annuaire`, {
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
export const getDetails = async (id) => {
    const token = await SecureStore.getItemAsync('jwtToken');
    const response = await fetch(`${API_BASE_URL}/api/profile/${id}`, {
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