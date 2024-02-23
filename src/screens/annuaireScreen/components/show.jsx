import {getAnnuaire} from "../../../api/AAE_api";
import {FlatList, View, Text} from "react-native";
import {useEffect, useState} from "react";
import LoadingScreen from "../../loadingScreen";

export const ShowAnnuaire = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const data = await getAnnuaire();
            setData(data.Data);
        };
        getData();
    }, []);
    const Item = ({title, description}) => (
        <View>
            <Text style={{fontWeight:500}}>{title}</Text>
            <Text style={{marginBottom:20}}> {description} </Text>
        </View>
    );
    const renderItem = ({item, index}) => (
        <Item description={item.user_email} title={item.display_name}/>
    );
    if (data === null) {
        return <LoadingScreen />;
    }
    return (
        <FlatList data={data} renderItem={renderItem}/>
    )
}