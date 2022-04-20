import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native'
export default function LoginApp() {
    let [loggedIn, setloggedIn] = useState(false)
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [errorPass, setErrorPass] = useState(false)
    let [errorUser, setErrorUser] = useState(false)
    let doLogin = useCallback(() => {
        if (username !== "") {

            if (password == "Ch@rge!") {
                setloggedIn(true)
            }
            else {
                setErrorPass(true)
            }
        }
        else {
            setErrorUser(true)
        }

    })

    return !loggedIn ? <>

        <Text style={styles.title}>Welcome, please log in below!</Text>
        <TextInput placeholder="Username" value={username} onChangeText={text => setUsername(text)} style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorUser ? "A Blank Username! Try Again." : ""}</Text>
        <TextInput secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} placeholder="Password" style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorPass ? "Wrong Password! Try Again." : ""}</Text>
        <Button title="Login" onPress={() => doLogin()}></Button>
    </> :
        <Text style = {styles.title}>Welcome {username}</Text>
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
