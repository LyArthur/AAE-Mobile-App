import {Button} from "react-native";
import * as SecureStore from "expo-secure-store";
import {useTranslation} from "react-i18next";

export const Logout = ({navigation}) => {
    const { t } = useTranslation("profileScreen");
    const Logout = () => {
        SecureStore.deleteItemAsync("jwtToken");
        navigation.reset({
            index: 0,
            routes: [{ name: 'Authentication' }]
        });
    }
    return (
        <Button title={t('logout')} onPress={Logout} />
    )
}
export default Logout