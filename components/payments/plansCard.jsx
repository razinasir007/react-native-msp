import React from 'react'
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
export const PlansCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Subscription 1</Text>
            </View>
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >${props.price}</Text>
                <Text style={{ fontSize: 17, marginTop: 5 }}>This is for testing purpose</Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.button} onPress={() => props.handleSubscription()}>
                    {
                        props.buttonLoader ?
                            <ActivityIndicator /> :
                            <>
                                <Text style={{ fontSize: 20, color: 'white' }}>Subscribe</Text>
                                <Icon name='chevron-right' size={18} color={'white'} style={{ marginTop: 5, marginLeft: 15 }} />
                            </>

                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 10,
        flexDirection: 'column',
        borderWidth: 0.5,
        width: '85%',
        height: 200,
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: 'center',


    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '80%',
        alignItems: 'center',
        height: 40,
        marginTop: 30
    }

});