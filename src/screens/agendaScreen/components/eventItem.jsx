import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import * as SecureStore from "expo-secure-store";
import * as Localization from "expo-localization";

const languageCode = Localization.getLocales()[0].languageCode === "fr" ? "fr" : "en";
const handleEventPress = async (uri) => {
    const jwtToken = await SecureStore.getItem('jwtToken');
    Linking.openURL(`https://academieairespace.com/?jwt=${jwtToken}&uri=${uri}`);
};

const isSameMonthYear = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};

const getFormattedDate = (date, format) => {
    const options = {...format};
    return new Intl.DateTimeFormat(languageCode, options).format(date);
};

const getMonthYear = (date) => {
    return getFormattedDate(date, {month: 'long', year: 'numeric'});
};

const getMonthName = (monthIndex) => {
    const frMonths = ['Jan', 'Fev', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
    const enMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const months = languageCode === 'fr' ? frMonths : enMonths;
    return months[monthIndex];
};

const getDayOfWeek = (date) => {
    const frDays = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
    const enDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const days = languageCode === 'fr' ? frDays : enDays;
    return days[date.getDay()];
};

const getTimeRange = (startDate, endDate) => {
    const startTime = startDate.toLocaleTimeString(languageCode, {hour: '2-digit', minute: '2-digit'});
    const endTime = endDate.toLocaleTimeString(languageCode, {hour: '2-digit', minute: '2-digit'});

    const formattedStartDate = `${startDate.getDate()} ${getMonthName(startDate.getMonth())} ${startDate.getFullYear()}`;
    const formattedEndDate = `${endDate.getDate()} ${getMonthName(endDate.getMonth())} ${endDate.getFullYear()}`;

    return startDate.toLocaleDateString() === endDate.toLocaleDateString()
        ? `${formattedStartDate} | ${startTime} > ${endTime}`
        : `${formattedStartDate} | ${startTime} > ${formattedEndDate} | ${endTime}`;
};

export const renderEventItem = ({item, index, events}) => {
    const startDate = new Date(item.start_date);
    const endDate = new Date(item.end_date);

    const dayOfWeek = getDayOfWeek(startDate);
    const timeRange = getTimeRange(startDate, endDate);

    return (
        <TouchableOpacity onPress={() => handleEventPress(item.uri)}>
            <View style={styles.container}>
                {index === 0 || !isSameMonthYear(startDate, new Date(events[index - 1].start_date)) ? (
                    <View style={styles.separatorContainer}>
                        <Text style={styles.separatorText}>{getMonthYear(startDate)}</Text>
                        <View style={styles.separatorLine}/>
                    </View>
                ) : null}
                <View style={styles.eventContainer}>
                    <View style={styles.dateContainer}>
                        <Text>{dayOfWeek}</Text>
                        <Text style={{fontSize: 24}}>{startDate.getDate()}</Text>
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
