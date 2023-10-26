import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export const ChatRecipients = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={{ width: 60, height: 60, borderRadius: 30, }} />
            <Text style={{fontSize:10}}>{props.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems:'center'
    }
});