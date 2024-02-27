import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AnnuaireScreen} from "../../screens/annuaireScreen";
import {DetailsUtilisateur} from "../../screens/detailsUtilisateurScreen";


const Stack = createNativeStackNavigator();
export const AnnuaireContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Annuaire" component={AnnuaireScreen} options={{headerShown:false}}/>
            <Stack.Screen name="DetailsUtilisateur" component={DetailsUtilisateur} options={{title:"Coordonnées"}}/>
        </Stack.Navigator>
    );
}