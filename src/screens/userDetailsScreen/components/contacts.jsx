import React from "react";
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const makePhoneCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
};

export const sendEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
};

export const RenderContacts = ({data}) => {
    const contacts = [];

    if (data.user_email) {
        contacts.push(
            <TouchableOpacity key="email" onPress={() => sendEmail(data.user_email)}>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactLabel}>Email :</Text>
                    <Text style={styles.contactValue}>{data.user_email}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    for (let i = 1; i < 6; i++) {
        if (data[`type-tel-0${i}`] !== "" && data[`type-tel-0${i}`] !== undefined) {
            contacts.push(
                <TouchableOpacity key={`telephone-0${i}`} onPress={() => makePhoneCall(data[`telephone-0${i}`])}>
                    <View style={styles.contactInfo}>
                        <Text style={styles.contactLabel}>{data[`type-tel-0${i}`]} :</Text>
                        <Text style={styles.contactValue}>{data[`telephone-0${i}`]}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    return (
        <View style={styles.contactContainer}>
            <Text style={styles.sectionTitle}>Contacts :</Text>
            {contacts}
        </View>
    );
};


const styles = StyleSheet.create({
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
