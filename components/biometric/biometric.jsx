import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import ReactNativeBiometrics , { BiometryTypes } from 'react-native-biometrics'
export const BiometricAuth = () => {
    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })
    
    const handleBiometricAuth=async ()=>{
        const { biometryType } = await rnBiometrics.isSensorAvailable()
      try {
        if (biometryType === BiometryTypes.Biometrics) {
            //do something face id specific
            console.log("sensor")
          }
      } catch (error) {
        console.log("errorr", error)
      }
    }
    return (
        <View style={styles.container}>
            <Button title='Biometric' onPress={handleBiometricAuth}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 10,

    },
  
});