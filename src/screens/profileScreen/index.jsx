import {StyleSheet, StatusBar, View} from "react-native";
import {ShowProfile, RenderProfileHeader} from "./components";
import * as SecureStore from "expo-secure-store";

export const ProfileScreen = ({navigation}) => {
    const username = SecureStore.getItem("username");
    const userImg = SecureStore.getItem("userImg");
    const data = {"username": username, "userImg":userImg};


    return (
        <View style={styles.container}>
            <RenderProfileHeader data={data}/>
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
        backgroundColor: '#f8f9fa',
    },
    textContainer: {
        marginBottom: 20,
    },
});
export default ProfileScreen