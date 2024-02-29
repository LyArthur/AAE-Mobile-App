import {StyleSheet, StatusBar, View} from "react-native";
import {ShowProfile} from "./components";

export const ProfileScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <ShowProfile navigation={navigation}/>
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
        marginBottom: 20,
    },
});
export default ProfileScreen