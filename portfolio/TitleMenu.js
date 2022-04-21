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
<Text style = {styles.title}>Web Application</Text>
<Button title="SignUp" onPress={() => setButtonSelect("sign")}></Button>
<Button title="LogIn" onPress={() => setButtonSelect("log")}></Button>
</>
   )
}
else if(buttonSelect == "log")
{
    return (
    <><LoginApp></LoginApp>
    <Button title="Return" style = {styles.button} onPress={() => setButtonSelect("title")}></Button>
    
    
    </>
    
    )
}
else if(buttonSelect == "sign")
{
    return (<>
    <SignUpApp></SignUpApp>
    <Button title="Return" onPress={() => setButtonSelect("title")}></Button>
    
    </>)

}
    
}
const styles = StyleSheet.create({

    title: {
        fontSize: 30
    },
    button:{
        padding: 12
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
