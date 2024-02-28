import {useEffect, useState} from "react";
import {validateToken} from "../api/AAE_api";

export default function useBeforeLaunching() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            const isValidToken = await validateToken();
            setIsAuthenticated(isValidToken);
            setIsLoaded(true);
        };
        checkAuthentication();
    }, []);

    return [isLoaded, isAuthenticated];
}