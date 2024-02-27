import {getProfile} from "../../../api/AAE_api";
import {useEffect, useState} from "react";
import {Text} from "react-native";
import LoadingScreen from "../../loadingScreen";

export const ShowProfile = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const data = await getProfile();
            if (data === false) {
                return (
                    <Text>No data</Text>
                )
            }
            setData(data.Data);
        };
        getData();
    }, []);
    if (data === null) {
        return <LoadingScreen />;
    }
    return <Text>{data.username}</Text>;
}