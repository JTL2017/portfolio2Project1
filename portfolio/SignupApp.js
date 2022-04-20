import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native'
import TitleMenu from './TitleMenu';
import Checked from './Checked';
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
            <>
              
            <LoginApp passUser = {username} password = {password}></LoginApp>
            
            </>
            setSignedUp(true)
            }
        }

    })
    if(allowed)
    {
        return <><LoginApp></LoginApp></>
    }

    return !signedUp ? <>

        <Text style={styles.title}>Welcome, please sign up!</Text>
        <TextInput placeholder="Username" value={username} onChangeText={text => setUsername(text)} style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorUser ? "A Blank Username! Try Again." : ""}</Text>
        <TextInput secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} placeholder="Password" style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorPass ? "Wrong Password! Try Again." : ""}</Text>
        <Button title="Sign Up" onPress={() => doLogin()}></Button>
    </> :
    <>
        <Text style = {styles.title}>Welcome {username}</Text>
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
