import { StatusBar } from 'expo-status-bar';
import { useState, useCallBack } from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import TitleMenu from './TitleMenu';
import LoginApp from './LoginApp';

export default function App() {


  return (

    <View style={styles.container}>
      
      <TitleMenu></TitleMenu>
      




      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

