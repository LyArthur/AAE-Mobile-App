import {Button} from "react-native";
import * as SecureStore from "expo-secure-store";

export const Logout = ({navigation}) => {
    const Logout = () => {
        SecureStore.deleteItemAsync("jwtToken");
        navigation.reset({
            index: 0,
            routes: [{ name: 'Authentication' }]
        });
    }
    return (
        <Button title={"Logout"} onPress={Logout} />
    )
}
export default Logout