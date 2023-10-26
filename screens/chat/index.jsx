import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, FlatList, Button } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { ChatRecipients } from '../../components/chat/chatRecipients';
import { chatRecipientsdata } from '../../constants';
import socket from '../../socket';
export const Chat = () => {
    const [message, setMessage] = useState('')
    const [chats, setChats] = useState([
        { id: 1, text: 'Hello!', user: 'user1' },
        { id: 2, text: 'Hi there!', user: 'user2' },
        { id: 3, text: 'How are you?', user: 'user1' },
        { id: 4, text: 'I am good, thanks!', user: 'user2' },
      ]);
    const handleSubmit = () => {
        
        socket.emit('message', {
            text: message,
            socketId: socket.id
        })
        if (message) {
            setChats([
                ...chats,
                {
                    id: chats.length + 1,
                    text: message,
                    user: 'user2', // Assuming user2 is the sender
                },
            ]);
            setMessage('');
        }
    }
    useEffect(()=>{
        socket.on("messageResponse", (data)=> setChats([
            ...chats,
            {
                id:chats.length +1,
                text:data.text,
                user:'user1'
            }
        ]))
    },[socket, message])
    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Messages</Text>
            </View>
            <View style={styles.mainconatiner}>
                <View style={styles.headerContainer}>
                    <View style={styles.searchInputContainer}>
                        <Icon name='search' size={20} />
                        <TextInput
                            style={{ marginLeft: 10, fontSize: 16, height: 25 }}
                            placeholder='Search Chat..'

                            name='search'
                        />
                    </View>
                    <View>
                        <Icon name='user-plus' size={30} />
                    </View>
                </View>
                <View style={styles.recipientsMain}  >
                    <FlatList horizontal data={chatRecipientsdata} renderItem={({ item }) =>
                        <View key={item.id} style={{ marginLeft: 14 }}>
                            <ChatRecipients name={item.name} image={item.image} />
                        </View>}
                        keyExtractor={item => item.id} />

                </View>
                <View>
                    <FlatList
                        data={chats}
                        renderItem={({ item }) => (
                            <View style={item.user === 'user1' ? styles.chatBubbleLeft : styles.chatBubbleRight}>
                                <Text style={styles.chatMessage}>{item.text}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>

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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingTop:15
    },
    titleContainer: {
        paddingTop: 5,
        marginLeft: 15
    },
    mainconatiner: {
        flexDirection: 'column'
    },
    recipientsMain: {
        // flexDirection:'row'
        alignItems: 'center',
        marginTop: 15,
        marginBottom:5
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        // backgroundColor:'white',
        marginTop: 10,
        justifyContent: 'space-between',
        paddingRight: 20
    },
    searchInputContainer: {
        flexDirection: 'row',
        // marginTop: 10,
        // justifyContent:'center',
        padding: 10,
        backgroundColor: '#e3e0d8',
        width: '85%',
        marginLeft: 10,
        height: 40,
        borderRadius: 5,
        alignItems: 'center'
    },
    chatMessage: {
        padding: 10,
    },
    chatBubbleLeft: {
        alignSelf: 'flex-start',
        backgroundColor: 'lightblue',
        margin: 5,
        borderRadius: 10,
    },
    chatBubbleRight: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightgreen',
        margin: 5,
        borderRadius: 10,
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