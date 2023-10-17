import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { Image, View, StyleSheet, Text, TextInput, Button, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import Checkbox from 'expo-checkbox';
import serviceHelper from '../../helperFunction';

export const SignIn = () => {
    const navigation = useNavigation()
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const handleSubmit = async () => {
        setLoader(true)
        const payload = {
            email: userEmail,
            password: userPassword
        }
        if (userEmail || userPassword !== '') {
            await serviceHelper('login', 'post', payload).then((res) => {
                if (res.data) {
                    setLoader(false)
                    ToastAndroid.showWithGravity(
                        'User Logged In Successfully',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    )
                    setUserEmail('')
                    setUserPassword('')
                    navigation.navigate("home")


                }
            }).catch((err) => {
              
                setLoader(false)
                ToastAndroid.showWithGravity(
                    `${err}`,
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                )
            })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image source={require('../../assets/mspMain.png')} style={{ width: 190, height: 90 }} />
            </View>

            <View style={styles.FormContainer} >
                <Text style={styles.titleText}>Log into your account</Text>
                <View style={styles.Form}>
                    <Text style={{ marginBottom: 10 }}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email..'
                        onChangeText={(e) => setUserEmail(e)}
                        name='email'

                    />
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Password..'
                        secureTextEntry={true}
                        name='password'
                        onChangeText={(e) => setUserPassword(e)}


                    />

                    <View style={styles.checkbox}>
                        <Checkbox />
                        <Text style={{ marginLeft: 5 }}>Remember me</Text>
                    </View>
                    <View style={styles.loginButtonContainer}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                        >
                            {
                                loader ? <ActivityIndicator />
                                    : <Text style={{ marginLeft: 7, fontSize: 15, color: 'white' }}>Log In</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 15 }}> Or </Text>
                    </View>
                    <View style={styles.googleButtonContainer}>
                        <TouchableOpacity

                            style={styles.googleSigninButton}
                        >
                            <Icon name='google' size={20} color='black' />
                            <Text style={{ marginLeft: 7, fontSize: 15 }}>Sign In with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerText}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Don't have an account? </Text>
                            <Text style={{ color: '#4480E5' }} onPress={() => navigation.navigate("signup")}>Sign Up</Text>
                        </View>
                        <Text style={{ color: '#4480E5' }}>Forgot Password?</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },

    ImageContainer: {
        paddingTop: 50

    },
    FormContainer: {
        marginTop: 10, // Adjust this margin to your desired spacing
        alignItems: 'center',
        paddingTop: 50,
        width: '100%'

    },
    Form: {
        paddingTop: 30,
        width: "90%"

    },
    checkbox: {
        flexDirection: 'row',
        marginTop: 15
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    loginButton: {
        marginTop: 25,
        borderRadius: 50
    },
    input: {
        // backgroundColor: 'red',
        borderWidth: 0.5,
        borderRadius: 5,
        height: 40,
        padding: 10
    },
    googleButtonContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 5,
        height: 35,
        justifyContent: 'center',
        marginTop: 7
    },
    loginButtonContainer: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        height: 35,
        justifyContent: 'center',
        marginTop: 15
    },
    googleSigninButton: {
        flexDirection: 'row',

    },
    footerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
});