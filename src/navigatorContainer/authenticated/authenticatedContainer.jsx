import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeScreen} from "../../screens/homeScreen";
import ProfileScreen from "../../screens/profileScreen";
import {AnnuaireContainer} from "./annuaireContainer";

const Drawer = createDrawerNavigator();
export const AuthenticatedNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="AnnuaireContainer" component={AnnuaireContainer} options={{title:"Annuaire"}}/>
        </Drawer.Navigator>
    );
}