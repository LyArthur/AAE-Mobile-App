import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeScreen} from "../../screens/homeScreen";
import ProfileScreen from "../../screens/profileScreen";
import {AnnuaireContainer} from "./annuaireContainer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
export const AuthenticatedNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color}/>
                ),
            }}/>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                drawerIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color}/>
                ),
            }}/>
            <Drawer.Screen name="AnnuaireContainer" component={AnnuaireContainer} options={{
                title: "Annuaire",
                drawerIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color}/>
                ),
            }}/>
        </Drawer.Navigator>
    );
}