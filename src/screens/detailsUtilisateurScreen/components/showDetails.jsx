import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import LoadingScreen from "../../loadingScreen";
import { getDetails } from "../../../api/AAE_api";
import {RenderContacts} from "./contacts";
import {RenderProfileHeader} from "./profileHeader";

const cachedData = {};

export const ShowDetails = ({ id }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (cachedData[id]) {
                setData(cachedData[id]);
            } else {
                const result = await getDetails(id);
                if (result === false) {
                    return (
                        <Text>No data</Text>
                    );
                }
                cachedData[id] = result.Data;
                setData(result.Data);
            }
        };

        fetchData();
    }, [id]);

    if (data === null) {
        return <LoadingScreen />;
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <RenderProfileHeader data={data}/>
            <RenderContacts data={data}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
});

export default ShowDetails;
