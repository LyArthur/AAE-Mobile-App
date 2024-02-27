import React, { useEffect, useState } from "react";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from "../../loadingScreen";
import { getDetails } from "../../../api/AAE_api";

export const ShowDetails = ({ id }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const cachedData = await AsyncStorage.getItem(`userData_${id}`);
                if (cachedData !== null) {
                    setData(JSON.parse(cachedData));
                } else {
                    const result = await getDetails(id);
                    if (result === false) {
                        return (
                            <Text>No data</Text>
                        );
                    }
                    await AsyncStorage.setItem(`userData_${id}`, JSON.stringify(result.Data));
                    setData(result.Data);
                }
            } catch (error) {
                console.error("Error retrieving data from AsyncStorage: ", error);
            }
        };
        getData();
    }, []);

    if (data === null) {
        return <LoadingScreen />;
    }

    const makePhoneCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const sendEmail = () => {
        const email = data.user_email;
        Linking.openURL(`mailto:${email}`);
    };

    const numeroTelephone = [];
    for (let i = 1; i < 6; i++) {
        if (data[`type-tel-0${i}`] !== "" && data[`type-tel-0${i}`] !== undefined) {
            numeroTelephone.push(
                <TouchableOpacity onPress={() => makePhoneCall(data[`telephone-0${i}`])} key={`telephone-0${i}`}>
                    <View style={styles.contactInfo}>
                        <Text style={styles.contactLabel}>{data[`type-tel-0${i}`]} :</Text>
                        <Text style={styles.contactValue}>{data[`telephone-0${i}`]}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={{ uri: data.img }}
                        style={styles.profileImage}
                    />
                </View>
                <Text style={styles.userName}>{data.first_name} {data.last_name}</Text>
            </View>
            <View style={styles.contactContainer}>
                <Text style={styles.sectionTitle}>Contacts :</Text>
                {numeroTelephone}
                {data.user_email && (
                    <TouchableOpacity onPress={sendEmail}>
                        <View style={styles.contactInfo}>
                            <Text style={styles.contactLabel}>Email :</Text>
                            <Text style={styles.contactValue}>{data.user_email}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
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
    contactContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contactInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    contactLabel: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    contactValue: {
        flex: 1,
    },
});

export default ShowDetails;
