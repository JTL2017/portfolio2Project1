import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View, Image } from 'react-native'
import SignUpApp from './SignupApp';

export default function ProfileApp({username})
{
    return (
        
        <View style = {styles.container}>
       
        <Text style = {styles.title}>Welcome {username}</Text>
        <Text style = {styles.bio}>This bio or other information can be used to </Text>
        
        </View>
        
    )
}
const styles = StyleSheet.create({
    bio:{
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        fontSize: 20,
    },
    title: {
        fontSize: 30,
    
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
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
