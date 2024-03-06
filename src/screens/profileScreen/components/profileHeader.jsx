import {Image, StyleSheet, Text, View} from "react-native";

export const RenderProfileHeader = ({data}) => {
    return (
        <View style={styles.profileHeader}>
            <View style={styles.profileImageContainer}>
                <Image
                    source={{uri: data.userImg}}
                    style={styles.profileImage}
                />
            </View>
            <Text style={styles.userName}>{data.username}</Text>
        </View>)
};
const styles = StyleSheet.create({
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImageContainer: {
        borderRadius: 50,
        overflow: 'hidden',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
});