import React, { useState } from "react";
import { Alert, StyleSheet, Button, TextInput, View } from "react-native";
import { authenticate } from "../../../api/AAE_api";

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
                Alert.alert('Erreur', 'Identifiants incorrects.');
            }
        } catch (error) {
            Alert.alert('Erreur', 'Problèmes de connexion');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={setUsername}
                editable={!isLoading}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                editable={!isLoading}
            />
            <Button title="Se connecter" onPress={handleLogin} disabled={isLoading} />
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
