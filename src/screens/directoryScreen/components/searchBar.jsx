import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useTranslation} from "react-i18next";

export const SearchBar = ({value, onChangeText}) => {
    const {t} = useTranslation("directoryScreen");
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#888" style={styles.searchIcon}/>
            <TextInput
                style={styles.input}
                placeholder={t('searchBar')}
                placeholderTextColor="#888"
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 12,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    input: {
        flex: 1,
        height: 36,
        fontSize: 14,
        color: '#1c1c1c',
        marginLeft: 8,
    },
    searchIcon: {
        marginRight: 8,
        color: '#1c1c1c',
    },
});