import {StyleSheet, StatusBar, View} from "react-native";
import {ShowProfile, RenderProfileHeader} from "./components";
import * as SecureStore from "expo-secure-store";
import {useEffect} from "react";
import LoadingScreen from "../loadingScreen";

export const ProfileScreen = ({navigation}) => {
    const [data, setData] = null;
    useEffect(() => {
        const getData = async () => {
            const username = await SecureStore.getItem("username");
            const userImg = await SecureStore.getItem("userImg");
            const data = {"username": username, "userImg": userImg};
            setData(data);
        }
        getData();
    }, []);

    if (data === null) {
        return (
            <LoadingScreen/>
        );
    }

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