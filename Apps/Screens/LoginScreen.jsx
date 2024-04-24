import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { client } from './../Utils/KindeConfig'
import { useContext } from 'react'
import { AuthContext } from '../../App'

export default function LoginScreen() {

    const { auth, setAuth } = useContext(AuthContext);
    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
            console.log("Authentication Successfully!!!")
            setAuth(true)
            // User was authenticated
        }
    };

    const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
            console.log("Authentication Successfully!!!")
            setAuth(true)
            // User was authenticated
        }
    };

    return (
        <View>
            <Image source={require('./../../assets/image/rocket.jpg')}
                style={styles.imageLogin} />
            <View style={{ padding: 20 }}>
                <Text style={styles.titleText}>Welcome to
                    <Text style={styles.titleTextSpan}> CodeBox</Text></Text>
                <Text style={styles.subtitleText}>Learn Programming to Build Real Life Projects</Text>
                <TouchableOpacity onPress={handleSignIn}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.buttonCreateAccont}>Create New Account </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: 60
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.WHITE,
        fontSize: 18
    },
    buttonCreateAccont: {
        marginTop: 10,
        color: Colors.PRIMARY,
        textAlign: 'center',
        fontSize: 16
    },
    imageLogin: {
        width: '100%',
        height: 400,
        objectFit: 'cover'
    },
    titleText: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    titleTextSpan: {
        color: Colors.PRIMARY
    },
    subtitleText: {
        fontSize: 20,
        marginTop: 7,
        color: Colors.GRAY
    }
})