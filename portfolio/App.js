import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import TitleMenu from './TitleMenu';


export default function App() {


  return (

    <View style={styles.container}>
      <TitleMenu></TitleMenu>
     
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

