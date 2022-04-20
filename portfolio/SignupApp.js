import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native'

import LoginApp from './LoginApp';
export default function SignUpApp() {
    let [signedUp, setSignedUp] = useState(false)
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [allowed, setAllowed] = useState(false)
    let [errorPass, setErrorPass] = useState(false)
    let [errorUser, setErrorUser] = useState(false)
    let doLogin = useCallback(() => {
        if (username !== "") {
            if(password !== "")
            {
            
            setSignedUp(true)
            }
            else{
                setErrorPass(true)
            }
        }
        else{
            setErrorUser(true)
        }

    })
    if(allowed)
    {
        return <><LoginApp name = {"hello"} password = {password} username = {username}></LoginApp></>
    }

    return !signedUp ? <>

        <Text style={styles.title}>Welcome, please sign up!</Text>
        <TextInput placeholder="Username" value={username} onChangeText={text => setUsername(text)} style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorUser ? "A Blank Username! Try Again." : ""}</Text>
        <TextInput secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} placeholder="Password" style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorPass ? "Blank Password! Try Again." : ""}</Text>
        <Button title="Sign Up" onPress={() => doLogin()}></Button>
    </> :
    <>
        <Text style = {styles.title}>Account Created!</Text>
        <Text>To double check, please log in using the button below!</Text>
        <Button title="Login" onPress={() => setAllowed(true)}></Button>
        </>
        //Button
}
const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        fontSize: 20,

    },
    errorStyle: {
        color: "red",

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
