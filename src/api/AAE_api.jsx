import * as SecureStore from "expo-secure-store";
import {Alert} from "react-native";

const API_BASE_URL = 'https://aaedev.com/extranet-membres/wp-json';

const sendAuthorizedRequest = async (url, method, body = null) => {
    let showAlert = true;
    while (true) {
        try {
            const token = await SecureStore.getItemAsync('jwtToken');
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const options = {
                method: method,
                headers: headers
            };
            if (body) {
                options.body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }
            const response = await fetch(url, options);
            const data = await response.json();
            if (!data.StatusCode === 1000) {
                return false;
            }
            return data;
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
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

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
        return true
    }
    return false
};

export const validateToken = async () => {
    return await sendAuthorizedRequest(`${API_BASE_URL}/jwt-auth/v1/token/validate`, 'POST');
};

export const getAnnuaire = async () => {
    return await sendAuthorizedRequest(`${API_BASE_URL}/api/annuaire`, 'GET');
};

export const getProfile = async () => {
    return await sendAuthorizedRequest(`${API_BASE_URL}/api/profile`, 'GET');
};

export const getDetails = async (id) => {
    return await sendAuthorizedRequest(`${API_BASE_URL}/api/profile/${id}`, 'GET');
};
export const getEvents = async () => {
    return await sendAuthorizedRequest(`${API_BASE_URL}/api/events`, 'GET');
};