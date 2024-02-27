import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { getAnnuaire } from '../../../api/AAE_api';
import LoadingScreen from '../../loadingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './item';

export const ShowAnnuaire = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const getData = async () => {
            const result = await getAnnuaire();
            if (result === false) {
                return;
            }
            setData(result.Data);
            setFilteredData(result.Data);
        };
        getData();
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = data.filter(item => {
            return item.display_name.toLowerCase().includes(text.toLowerCase()) || item.user_email.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };

    if (filteredData === null) {
        return <LoadingScreen />;
    }

    const renderItem = ({ item }) => (
        <Item
            userId={item.ID}
            email={item.user_email}
            title={item.display_name}
            img={item.img}
            onPress={() => navigation.navigate('DetailsUtilisateur', { userId: item.ID })}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher..."
                    onChangeText={handleSearch}
                    value={searchQuery}
                />
            </View>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.ID.toString()}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#a3a3a3',
        borderRadius: 3,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    list: {
        width: '100%',
    },
});