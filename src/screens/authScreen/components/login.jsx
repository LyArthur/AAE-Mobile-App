import React, { useState } from "react";
import { Alert, StyleSheet, Button, TextInput, View } from "react-native";
import { authenticate } from "../../../api/AAE_api";
import {useTranslation} from "react-i18next";

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation("authScreen");

    const handleLogin = async () => {
        try {
            setIsLoading(true); // Activer le chargement
            const isAuthenticated = await authenticate(username, password);
            if (isAuthenticated === true) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "AuthenticatedNavigator", params: { screen: 'Home' } }]
                });
            } else {
                Alert.alert(t('errors.title'), t('errors.invalidCredentials'));
            }
        } catch (error) {
            Alert.alert(t('errors.title'), t('errors.connectionIssues'));
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <View>
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
            <Button title={t('login')} onPress={handleLogin} disabled={isLoading} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    }
});

export default Login;
