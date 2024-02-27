import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText }) => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
            <TextInput
                style={styles.input}
                placeholder="Rechercher..."
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
        color: '#333',
        marginLeft: 8,
    },
    searchIcon: {
        marginRight: 8,
    },
});

export default SearchBar;
