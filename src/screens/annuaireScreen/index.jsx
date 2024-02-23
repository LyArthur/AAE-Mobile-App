import {ShowAnnuaire} from "./components";
import {StatusBar, StyleSheet, View} from "react-native";

export const AnnuaireScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ShowAnnuaire/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    }
});