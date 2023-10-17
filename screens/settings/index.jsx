import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
export const Settings = ()=> {
  return (
    <View style={styles.container}>
   <Text>Settings Page</Text>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  });