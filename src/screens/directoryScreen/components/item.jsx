import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Item extends PureComponent {
    render() {
        const {title, email, img, onPress} = this.props;
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={onPress}
            >
                <Image source={{uri: img}} style={styles.avatar}/>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 75,
        marginRight: 10,
    },
    title: {
        fontWeight: '500',
    },
    email: {
        marginBottom: 5,
    },
});

export default Item;