import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../../screens/homeScreen';
import ProfileScreen from '../../screens/profileScreen';
import {AnnuaireContainer} from './annuaireContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from "react-i18next";
import {AgendaScreen} from "../../screens/agendaScreen";

const Drawer = createDrawerNavigator();

export const AuthenticatedNavigator = () => {
    const { t } = useTranslation();
    return (<Drawer.Navigator>
        <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
                drawerIcon: ({focused, color, size}) => (<Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={size}
                    color={color}
                />), title: t('homeScreen:title'),
            }}
        />
            <Drawer.Screen
                name="Agenda"
                component={AgendaScreen}
                options={{
                    drawerIcon: ({focused, color, size}) => (<Ionicons
                            name={focused ? 'calendar' : 'calendar-outline'}
                            size={size}
                            color={color}
                        />), title: t('agendaScreen:title'),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({focused, color, size}) => (<Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={size}
                            color={color}
                        />), title: t('profileScreen:title'),
                }}
            />
            <Drawer.Screen
                name="AnnuaireContainer"
                component={AnnuaireContainer}
                options={{
                    title: t('directoryScreen:title'), drawerIcon: ({focused, color, size}) => (<Ionicons
                            name={focused ? 'book' : 'book-outline'}
                            size={size}
                            color={color}
                        />),
                }}
            />
        </Drawer.Navigator>);
};
