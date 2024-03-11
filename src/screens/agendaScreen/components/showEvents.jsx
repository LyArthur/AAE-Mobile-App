import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getEvents} from "../../../api/AAE_api";
import {Loading} from "../../loadingScreen/components";
import {renderEventItem} from './eventItem';

export const ShowEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data.Data);
            setLoading(false);

        };

        fetchEvents();
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={events}
                renderItem={({item, index}) => renderEventItem({item, index, events})}
                keyExtractor={(item) => item.uri}
                contentContainerStyle={{flexGrow: 1}}
            />
        </View>
    );
};