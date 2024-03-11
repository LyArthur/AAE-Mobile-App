import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AnnuaireScreen} from "../../screens/directoryScreen";
import {DetailsUtilisateur} from "../../screens/userDetailsScreen";
import {useTranslation} from "react-i18next";


const Stack = createNativeStackNavigator();
export const AnnuaireContainer = () => {
    const {t} = useTranslation("userDetailsScreen");
    return (
        <Stack.Navigator>
            <Stack.Screen name="Annuaire" component={AnnuaireScreen} options={{headerShown: false}}/>
            <Stack.Screen name="DetailsUtilisateur" component={DetailsUtilisateur} options={{title: t("title")}}/>
        </Stack.Navigator>
    );
}