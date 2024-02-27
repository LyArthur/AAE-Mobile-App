import {StyleSheet, Text, StatusBar, View} from "react-native";
import {Logout} from "./components";
import {ShowProfile} from "./components";

export const ProfileScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <Text> Profile screen </Text>
            <ShowProfile />
            <Logout navigation={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginBottom: 20, // Espacement entre le texte et le bord inférieur de l'écran
    },
});
export default ProfileScreen