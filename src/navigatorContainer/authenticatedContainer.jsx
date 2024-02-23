import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeScreen} from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import {AnnuaireScreen} from "../screens/annuaireScreen";

const Drawer = createDrawerNavigator();
export const AuthenticatedNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Annuaire" component={AnnuaireScreen}/>
        </Drawer.Navigator>
    );
}