import { useState } from "react";
import { Alert, StyleSheet, Button, TextInput, View } from "react-native";
import { authenticate } from "../../../api/AAE_api";

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await authenticate(username, password);
            // Stocker le token dans le stockage sécurisé ou dans le contexte de l'application
            // Rediriger l'utilisateur vers une autre vue après la connexion réussie
            navigation.reset({
                index: 0,
                routes: [{ name: "AuthenticatedNavigator", params: { screen: 'Home' } }]
            });
        } catch (error) {
            console.error('Erreur lors de l\'authentification:', error);
            Alert.alert('Erreur', 'Identifiants incorrects.');
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Se connecter" onPress={handleLogin} />
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
