import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

export const ContactCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.handleClick()}>
            <Image source={require('../../assets/profileIcon1.png')} style={{ width: 50, height: 50, marginLeft: 10, borderRadius: 10 }} />
            <View style={styles.contactDetails}>
                <View style={styles.contactTitle}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>{props.fullname}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 400 }}>{props.email}</Text>
                </View>
                <View>
                    <Icon name='chevron-right' size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: 10,
        flexDirection: 'row',
        width: '95%',
        height: 70,
        backgroundColor: "#e3e0d8",
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 10

    },
    contactTitle: {
        flexDirection: 'column',
        marginLeft: 15

    },
    contactDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        // marginLeft: 10,
        justifyContent: 'space-between'
    }
});