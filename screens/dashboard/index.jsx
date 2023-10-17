import React from 'react'
import { Text, View, StyleSheet, StatusBar, Dimensions } from 'react-native'

export const Dashboard = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
  
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems:'center'
  },
});