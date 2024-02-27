import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getAnnuaire } from '../../../api/AAE_api';
import LoadingScreen from '../../loadingScreen';
import Item from './item';
import SearchBar from './searchBar';

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
            const sortedData = result.Data.sort((a, b) => {
                return a.last_name.localeCompare(b.last_name);
            });
            setData(sortedData);
            setFilteredData(sortedData);
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
            title={item.first_name + ' ' + item.last_name}
            img={item.img}
            onPress={() => navigation.navigate('DetailsUtilisateur', { userId: item.ID })}
        />
    );

    return (
        <View style={styles.container}>
            <SearchBar value={searchQuery} onChangeText={handleSearch} />
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
    list: {
        width: '100%',
    },
});
