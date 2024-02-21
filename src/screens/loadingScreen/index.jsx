import {Loading} from "./components";
import {useEffect} from "react";
import * as SecureStore from 'expo-secure-store';

export const LoadingScreen = ({navigation}) => {
    useEffect(() => {
        void checkAuthToken(navigation);
    }, []);
    const checkAuthToken = async (navigation) => {
        try {
            const token = await SecureStore.getItemAsync('jwtToken');
            if (token) {
                // Rediriger vers la page d'accueil si un token JWT est présent
                navigation.replace('Home');
            } else {
                // Rediriger vers la page de connexion si aucun token JWT n'est présent
                navigation.replace('Authentication');
            }
        } catch (error) {
            console.error('Error checking auth token:', error);
        }
    };
    return(
        <Loading />
    )
}
export default LoadingScreen