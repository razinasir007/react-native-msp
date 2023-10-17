import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
export const Appointments = ()=> {
  return (
    <View style={styles.container}>
    <Text>Appointment</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  });