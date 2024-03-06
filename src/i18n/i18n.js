import * as Localization from "expo-localization";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import fr from './fr.json';
import en from './en.json';

const resources = {
    fr: {
        loadingScreen: fr.loadingScreen, authScreen: fr.authScreen,
        homeScreen: fr.homeScreen, profileScreen: fr.profileScreen,
        directoryScreen: fr.directoryScreen, userDetailsScreen: fr.userDetailsScreen,
        agendaScreen: fr.agendaScreen
    },

    en: {
        loadingScreen: en.loadingScreen, authScreen: en.authScreen,
        homeScreen: en.homeScreen, profileScreen: en.profileScreen,
        directoryScreen: en.directoryScreen, userDetailsScreen: en.userDetailsScreen,
        agendaScreen: en.agendaScreen
    },
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        fallbackLng: 'en',
        debug: false,
        lng: Localization.getLocales()[0].languageCode,
    });

export {i18n}
