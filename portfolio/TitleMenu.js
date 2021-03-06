import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native'
import LoginApp from './LoginApp';
import SignUpApp from './SignupApp';
export default function TitleMenu() {
    let [buttonSelect, setButtonSelect] = useState("title")
    
if(buttonSelect == "title")
{
   return (
       
<>
<View style = {styles.container}>

<Text style = {styles.title}> Article Application</Text>
<Text> Please sign up or log in below to edit your article!</Text>
<Button title="SignUp" onPress={() => setButtonSelect("sign")} style = {styles.button} ></Button>
<Button title="LogIn" onPress={() => setButtonSelect("log")}style = {styles.button}></Button>
</View>
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
        alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
