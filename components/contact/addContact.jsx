import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import Checkbox from 'expo-checkbox';
import { Alert, Modal, StyleSheet, Text, TextInput, View, Pressable, Button, TouchableOpacity, ActivityIndicator,ToastAndroid } from 'react-native';
import serviceHelper from '../../helperFunction';

export default function AddContact() {
    const [modalVisible, setModalVisible] = useState(false);
    const [loader, setLoader]= useState(false)
    const [contactDetails, setContactDetails]= useState({
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:'',
        mailaddress:'',
        billingaddress:'',
    })

    const handleAddContact = () =>{
        setLoader(true)
        serviceHelper('contact', 'post', contactDetails).then((res) => {
            if (res.data) {
                setLoader(false)
                ToastAndroid.showWithGravity(
                    'Contact Created Successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                )


            }
        }).catch((err) => {
          console.log('error', err)
            setLoader(false)
            ToastAndroid.showWithGravity(
                `${err}`,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        })
    }
    return (
        <View style={{ marginTop: 15 }}>
            <Icon name='user-plus' size={30} onPress={() => setModalVisible(true)} />
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add Contact</Text>

                            <View style={styles.Form}>
                                <Text style={{ marginBottom: 7 }}>First Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='First Name..'
                                    onChangeText={(e) => setContactDetails((prev)=> ({
                                        ...prev,
                                        firstname:e
                                    }))}
                                    name='firstname'

                                />
                                <Text style={{ marginBottom: 7, marginTop: 7 }}>Last Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Last Name..'
                                    onChangeText={(e) => setContactDetails((prev)=> ({
                                        ...prev,
                                        lastname:e
                                    }))}

                                />

                                <Text style={{ marginBottom: 7, marginTop: 7 }}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Email..'
                                    onChangeText={(e) => setContactDetails((prev)=> ({
                                        ...prev,
                                        email:e
                                    }))}


                                />

                                <Text style={{ marginBottom: 7, marginTop: 7 }}>Phone Number</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Phone Number..'
                                    onChangeText={(e) => setContactDetails((prev)=> ({
                                        ...prev,
                                        phonenumber:e
                                    }))}


                                />

                                <Text style={{ marginBottom: 7, marginTop: 7 }}>Mail Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Mail Address..'
                                    onChangeText={(e) => setContactDetails((prev)=> ({
                                        ...prev,
                                        mailaddress:e
                                    }))}


                                />
                                <View style={styles.checkbox}>
                                    <Checkbox style={{height:14, width:15}} />
                                    <Text style={{ marginLeft: 2 }}> Billing address is same as mail address</Text>
                                </View>
                                <Text style={{ marginBottom: 7, marginTop: 7 }}>Billing Address</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Billing Address..'
                                    onChangeText={(e) => setContactDetails((prev)=> ({
                                        ...prev,
                                        billingaddress:e
                                    }))}


                                />


                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>

                                    <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: 500, color: 'black' }}>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.doneButton} onPress={handleAddContact} >
                                {
                                    loader ? <ActivityIndicator />
                                        : <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: 500, color: 'white' }}>Add</Text>
                                }
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,  // Increase padding for a larger modal
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    Form: {
        paddingTop: 10,
        width: "90%"

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    checkbox: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        // marginTop: 5,
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    closeButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        backgroundColor: 'white',
        height: 35,
        borderRadius: 5,
        marginRight: 10,
        width: 75,
        justifyContent: 'center'
    },
    doneButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        backgroundColor: 'black',
        height: 35,
        borderRadius: 5,
        width: 75,
        justifyContent: 'center'
    }
});