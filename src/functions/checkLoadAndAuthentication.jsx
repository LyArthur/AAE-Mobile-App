import LoadingScreen from "../screens/loadingScreen";

export default function checkLoadAndAuthentication(isLoaded, isAuthenticated) {

    if (isLoaded === true){
        return <LoadingScreen />;
    } else if (isAuthenticated === false) {
        return "Authentication";
    }
    return false;
}