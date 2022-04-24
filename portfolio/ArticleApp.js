import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View, Image } from 'react-native'
import SignUpApp from './SignupApp';

export default function ArticleApp({username})
{
    let [inputText, setInputTexts] = useState("")
    let [value, setValue] = useState(false)
    let [edit, setEdit] = useState(false)
    let addArticle = useCallback(() => {
        
        setValue(true)
        setEdit(false)
        console.log(inputText)
        
        
    })
    let editButton = useCallback(() => {
        
        console.log(inputText)
        setEdit(true)
        setValue(true)
        
    })

    return (
        <>
        
        <Text style = {styles.title}>Welcome {username}</Text>
        
        <Text>Click the edit button below to edit or add to the article</Text>
       
        
       {edit ? <TextInput style = {styles.content} onChangeText = {newText => setInputTexts(newText)} defaultValue = {inputText}></TextInput> : <Text style = {styles.content}>{value ? inputText : "Write article here..."}</Text>}
        {edit ? <Button title="Save" onPress={addArticle}></Button> : "" }
        {edit == false ? <Button title="Edit Article" onPress={editButton}></Button> : ""}

        
        
        </>
    )
}
const styles = StyleSheet.create({
    content:{
        
        
        margin: 12,
        borderWidth: 3,
        padding: 10,
        fontSize: 15,
        width: 800,
        maxWidth: 800
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
