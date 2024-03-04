import {ActivityIndicator, Text, View} from "react-native";
import React from "react";
import {useTranslation} from "react-i18next";

export const Loading = () => {
    const { t } = useTranslation("loadingScreen"); // Importez uniquement les données liées à "loadingScreen"

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
            <Text>{t('message')}</Text>
        </View>
    )
}
export default Loading