import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import serviceHelper from '../../helperFunction';
import { Image, View, StyleSheet, Text, TextInput, Button, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
export const SignUp = () => {
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
            await serviceHelper('user', 'post', payload).then((res) => {
                if (res.data) {
                    setLoader(false)
                    ToastAndroid.showWithGravity(
                        'User Created Successfully',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER,
                    )
                        setUserEmail('')
                        setUserPassword('')
                        navigation.navigate("signin")
                 

                }
            }).catch((err) => {
                console.log("error", err)
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
                <Text style={styles.titleText}>Create your account</Text>
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


                    <View style={styles.loginButtonContainer}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                        >
                            {
                                loader ? <ActivityIndicator />
                                    : <Text style={{ marginLeft: 7, fontSize: 15, color: 'white' }}>Sign Up</Text>
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerText}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Already have an account?  </Text>
                            <Text style={{ color: '#4480E5' }} onPress={() => navigation.navigate("signin")}>Log In</Text>
                        </View>
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
        alignItems: 'center',
        marginTop: 20
    }
});