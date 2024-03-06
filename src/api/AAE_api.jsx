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
            if (data.StatusCode !== undefined) {
                if (data.StatusCode !== 1000) {
                    return false
                }
            } else if (data.data.status !== 200) {
                return false
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
        await new Promise(resolve => setTimeout(resolve, 4000));
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
    return responseData
};

export const validateToken = async () => {
    try{
        const token = await SecureStore.getItemAsync('jwtToken');
        const response = await fetch(`${API_BASE_URL}/api/token/VALIDATE`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        const responseData = await response.json();
        await SecureStore.setItemAsync("username",responseData.Data.data.username);
        await SecureStore.setItemAsync("userImg",responseData.Data.data.userImg);
        return responseData.Data.status === 200;

    } catch (error){
        return false
    }
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