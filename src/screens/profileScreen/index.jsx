import {StyleSheet, Text, StatusBar, View} from "react-native";

export const ProfileScreen = () =>{
    return (
        <View style={styles.container}>
            <Text> Profile screen </Text>
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