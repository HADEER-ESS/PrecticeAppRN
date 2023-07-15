import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TextComp from './src/component/TextComp';



function App(): JSX.Element {
 
  return (
    <View >
      {/* //ITEM */}
      <ScrollView>
      <TextComp Title={"Training App"}/>
      <TextComp Title={"Test Text View Bla BLA BlA"}/>
      <Button title='Hello'/>
    </ScrollView>
    {/* //ITEM */}
    <View>
      <Text>BLA BLA BLA</Text>
    </View>
    </View>
  );
}


export default App;
