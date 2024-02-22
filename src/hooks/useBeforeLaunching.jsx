import {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import {validateToken} from "../api/AAE_api";

export default function useBeforeLaunching() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = await SecureStore.getItemAsync("jwtToken");
            if (await validateToken(token)) {
                setIsAuthenticated(true);
            }
            setIsLoaded(true);
        };
        checkAuthentication();
    }, []);

    return [isLoaded, isAuthenticated];
}