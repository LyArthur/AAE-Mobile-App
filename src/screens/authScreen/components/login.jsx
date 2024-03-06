import React, { useState } from "react";
import { Alert, StyleSheet, Button, TextInput, View } from "react-native";
import { authenticate } from "../../../api/AAE_api";
import { useTranslation } from "react-i18next";
import {setUser} from "../../../functions/setUser";

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation("authScreen");

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const isAuthenticated = await authenticate(username, password);
            if (isAuthenticated === true) {
                await setUser();
                navigation.reset({
                    index: 0,
                    routes: [{ name: "AuthenticatedNavigator", params: { screen: 'Home' } }]
                });
            } else {
                if (isAuthenticated.code === "jwt_auth_forbidden") {
                    Alert.alert(t('errors.title'), t('errors.accessDenied'));
                } else {
                    Alert.alert(t('errors.title'), t('errors.invalidCredentials'));
                }
            }
        } catch (error) {
            Alert.alert(t('errors.title'), t('errors.connectionIssues'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={t('username')}
                value={username}
                onChangeText={setUsername}
                editable={!isLoading}
            />
            <TextInput
                style={styles.input}
                placeholder={t('password')}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                editable={!isLoading}
            />
            <View style={styles.buttonContainer}>
                <Button title={t('login')} onPress={handleLogin} disabled={isLoading} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width: '60%',
        borderColor: '#dcdcdc',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        width: '40%',
        alignSelf: 'flex-end',
        marginRight:20
    },
});

export default Login;
