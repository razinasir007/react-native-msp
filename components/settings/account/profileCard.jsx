import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';

export const ProfileCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Profile</Text>
                    <Text style={{ fontSize: 10 }}>This information will be displayed publicly so be careful what you share.</Text>
                </View>
                <View style={styles.containerForm}>
                    <View style={styles.column}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput style={styles.input} placeholder="Enter First Name" />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput style={styles.input} placeholder="Enter Last Name" />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} placeholder="Enter Email" />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Role</Text>
                        <TextInput style={styles.input} placeholder="Enter Role" />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput style={styles.input} placeholder="Enter Address" />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Number</Text>
                        <TextInput style={styles.input} placeholder="Enter Number" />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center'
    },
    profileCard: {
        width: '95%',
        borderWidth: 0.5,
        // alignItems:'center'
    },
    title: {
        flexDirection: 'column',
        marginLeft: 7,
        marginTop: 5
    },
    containerForm: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    column: {
        width: '50%',
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
    },

});