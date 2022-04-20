import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native'
import SignUpApp from './SignupApp';
export default function LoginApp({name, password, username}) {
    
console.log(password)
console.log(username)
console.log(name)
    let [loggedIn, setloggedIn] = useState(false)
    let [currentUsername, setUsername] = useState("")
    let [currentPassword, setPassword] = useState("")
    let [errorPass, setErrorPass] = useState(false)
    let [errorUser, setErrorUser] = useState(false)
    let [promptButton, setPromptButton] = useState(false)
    let [prompt, setPrompt] = useState(false)
    
    
    let doLogin = useCallback(() => {
        if(password === undefined && username == undefined)
        {
                setPrompt(true)
        }
        if (currentUsername !== "") {

            if(currentUsername == username){

            
            if (currentPassword == password) {

                setloggedIn(true)
            }
            else {
                setErrorPass(true)
            }
        }
        }
        else {
            setErrorUser(true)
        }

    })
    if(promptButton)
    {
        return (<><SignUpApp></SignUpApp></>)
    }

    return !loggedIn ? <>

        <Text style={styles.title}>Welcome, please log in below!</Text>
        <TextInput placeholder="Username" value={currentUsername} onChangeText={text => setUsername(text)} style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorUser ? "A Blank Username! Try Again." : ""}</Text>
        <TextInput secureTextEntry={true} value={currentPassword} onChangeText={text => setPassword(text)} placeholder="Password" style={styles.input}></TextInput>
        <Text style={styles.errorStyle}>{errorPass ? "Wrong Password! Try Again." : ""}</Text>
        <Button title="Login" onPress={() => doLogin()}></Button>
        <Text style={styles.errorStyle}>{ prompt ? "If you haven't created an account, please sign up here!" : ""}</Text>
        <Text style={styles.errorStyle}>{ prompt ? <Button title="SignUp" onPress={() => setPromptButton(true)}></Button> : ""}</Text>
    </> :
    <>   <Text style = {styles.title}>Welcome {username}</Text>
        <Text style = {styles.title}>Sign out if need be</Text>
        </>
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
