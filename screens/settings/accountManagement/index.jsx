import React from 'react'
import { Text, View, StyleSheet , StatusBar} from 'react-native';
import { ProfileCard } from '../../../components/settings/account/profileCard';

export const AccountManagement = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Account</Text>
            </View>
            <View style={styles.profile}>
                <ProfileCard />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header: {
        paddingTop: 20,
        marginLeft: 15
    },
    profile:{
        paddingTop:10
    }
});