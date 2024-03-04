import {ShowAnnuaire} from "./components";
import {StyleSheet, View} from "react-native";

export const AnnuaireScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ShowAnnuaire navigation={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});