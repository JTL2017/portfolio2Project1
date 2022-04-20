import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native'
import LoginApp from './LoginApp';
import SignUpApp from './SignupApp';
export default function TitleMenu() {
    let [buttonSelect, setButtonSelect] = useState("title")
    
if(buttonSelect == "title")
{
   return (
<>
<Button title="SignUp" onPress={() => setButtonSelect("sign")}></Button>
<Button title="LogIn" onPress={() => setButtonSelect("log")}></Button>
</>
   )
}
else if(buttonSelect == "log")
{
    return (<><LoginApp></LoginApp></>)
}
else if(buttonSelect == "sign")
{
    return (<><SignUpApp></SignUpApp></>)
}
    
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
