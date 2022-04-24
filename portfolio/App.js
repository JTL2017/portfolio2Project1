import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import ProfileApp from './ArticleApp';
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  container: {
    flex: 1,
   // backgroundColor:'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

