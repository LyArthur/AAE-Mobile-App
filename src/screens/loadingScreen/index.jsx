import {Loading} from "./components";
import {
    StyleSheet, View} from "react-native";

export const LoadingScreen = ({}) => {
    return (
        <View style={styles.container}>
            <Loading/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
});
export default LoadingScreen