import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import * as SecureStore from "expo-secure-store";

const handleEventPress = async (uri) => {
    const jwtToken = await SecureStore.getItem('jwtToken');
    Linking.openURL(`https://aaedev.com/?jwt=${jwtToken}&uri=${uri}`);
};

const isSameMonthYear = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};

const getMonthYear = (date) => {
    const monthYearFormat = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' });
    return monthYearFormat.format(date);
};

const getMonthName = (monthIndex) => {
    const months = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex];
};

export const renderEventItem = ({ item, index, events }) => {
    const startDate = new Date(item.start_date);
    const endDate = new Date(item.end_date);
    const dayOfWeek = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'][startDate.getDay()];
    const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const formattedStartDate = `${startDate.getDate()} ${getMonthName(startDate.getMonth())} ${startDate.getFullYear()}`;
    const formattedEndDate = `${endDate.getDate()} ${getMonthName(endDate.getMonth())} ${endDate.getFullYear()}`;
    const timeRange = startDate.toLocaleDateString() === endDate.toLocaleDateString() ? `${formattedStartDate} | ${startTime} > ${endTime}` : `${formattedStartDate} | ${startTime} > ${formattedEndDate} | ${endTime}`;

    return (
        <TouchableOpacity onPress={() => handleEventPress(item.uri)}>
            <View style={styles.container}>
                {index === 0 || !isSameMonthYear(startDate, new Date(events[index - 1].start_date)) ? (
                    <View style={styles.separatorContainer}>
                        <Text style={styles.separatorText}>{getMonthYear(startDate)}</Text>
                        <View style={styles.separatorLine} />
                    </View>
                ) : null}
                <View style={styles.eventContainer}>
                    <View style={styles.dateContainer}>
                        <Text>{dayOfWeek}</Text>
                        <Text style={{ fontSize: 24 }}>{startDate.getDate()}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.timeText}>{timeRange}</Text>
                        <Text style={styles.eventName}>{item.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    separatorText: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'capitalize',
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    eventContainer: {
        flexDirection: 'row',
        padding: 10
    },
    dateContainer: {
        alignItems: 'center',
        marginRight: 20
    },
    timeText: {
        fontSize: 14,
        marginBottom: 5
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 50
    }
});

export default renderEventItem;
