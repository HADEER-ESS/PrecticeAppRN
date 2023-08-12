import React from 'react';
import {Alert, View} from 'react-native';
import TextComp from './src/component/TextComp';
import ButtonComp from './src/component/ButtonComp';


function App(): JSX.Element {
 
  return (
    <View >
      <TextComp Title={"Training App"}/>
      <ButtonComp btnText={"Click ME!!"} btnPressFunction={()=>{Alert.alert("BTN Clicked" , "Hello from btn")}}/>
    </View>
  );
}


export default App;
