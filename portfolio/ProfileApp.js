import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View, Image, TurboModuleRegistry } from 'react-native'
import SignUpApp from './SignupApp';

export default function ProfileApp({username})
{
    let [inputText, setInputTexts] = useState("")
    let [value, setValue] = useState(false)
    let [editButton, setEditButton] = useState(true)
    let addTask = useCallback(() => {
        
        setValue(true)
        console.log(inputText)
        
    })

    return (
        
        <View style = {styles.container}>
        <Text style = {styles.title}>Welcome {username}</Text>
        <Text style = {styles.bio}>{value ? inputText : "-Empty Bio-"}</Text>
        
       {editButton ? <Text>Change Bio: <TextInput style = {styles.input} onChangeText = {newText => setInputTexts(newText)} defaultValue = {inputText}></TextInput></Text> : ""} 
       {editButton ?  <Button title="Change Bio" onPress={addTask}></Button> : <Button title="Edit Bio" onPress={setEditButton(false)}></Button>}

        
        </View>
        
    )
}
const styles = StyleSheet.create({
    bio:{
        
        height: 60,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        fontSize: 15,
    },
    title: {
        fontSize: 30,
    
    },
    input: {
        height: 20,
        margin: 7,
        borderWidth: 1,
        padding: 10,
        fontSize: 15,

    },
    errorStyle: {
        color: "red",

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
