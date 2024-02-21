import {ActivityIndicator, Text, View} from "react-native";
import React, {useEffect} from "react";

export const Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
            <Text>Loading...</Text>
        </View>
    )
}
export default Loading