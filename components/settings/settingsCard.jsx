import React from 'react'
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

export const SettingItemCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.handleClick()}>

            <View style={styles.settingsContainer}>
                <View style={styles.settingsDetails}>
                    <Icon name={props.iconName} size={22} style={{marginLeft:10}}/>
                    <Text style={{ fontSize: 18, fontWeight: 600,marginLeft:10 }}>{props.settingName}</Text>
                </View>
                <View>
                    <Icon name='chevron-right' size={20} style={{marginRight:7}}/>
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
        backgroundColor: "#e3e 0d8",
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: 10

    },
    settingsDetails: {
        flexDirection: 'row',
        alignItems:'center'
        // marginLeft: 15

    },
    settingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    }
});