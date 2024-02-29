import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import {getEvents} from "../../api/AAE_api";

const EventsScreen = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await getEvents();
            if (response && response.Status) {
                setEvents(response.Data); // Mettez à jour le state avec les données des événements
            } else {
                console.error('Erreur lors de la récupération des événements');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des événements:', error);
        } finally {
            setLoading(false); // Arrêtez le chargement une fois la requête terminée, qu'elle ait réussi ou échoué
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Liste des événements à venir :</Text>
            <FlatList
                data={events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text>Date : {item.date}</Text>
                        <Text>URL : {item.url}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default EventsScreen;
