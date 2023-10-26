import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar, Button, TextInput } from 'react-native'
import socket from '../../socket';

export const Dashboard = () => {

  const [message, setMessage] = useState('');

  const handleSubmit = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.messageInputContainer}>
        <TextInput
          placeholder="Message.."
          onChangeText={(e) => setMessage(e)}
          value={message}
          style={styles.messageInput}
        />
        <Button title="Send" onPress={handleSubmit} style={styles.sendButton} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center'
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    marginLeft: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 'auto', // Push to the bottom
    marginTop: 10,
  },
  messageInput: {
    flex: 1,

    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  sendButton: {
    paddingHorizontal: 20,
  },
});