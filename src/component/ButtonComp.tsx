import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface btnProps {
    btnText : String,
    btnPressFunction : ()=>void
}

const ButtonComp = ({btnText , btnPressFunction} : btnProps) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={btnPressFunction}>
        <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    btnStyle : {
        backgroundColor : "#ff77ff",
        borderRadius : 17,
        marginHorizontal : "21%",
    },
    btnText:{
        fontSize : 24,
        padding : 11,
        color : "#ffffff",
        textAlign : 'center'
    }
})