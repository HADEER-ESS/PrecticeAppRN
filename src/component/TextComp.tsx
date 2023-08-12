import React from 'react'
import { Text } from 'react-native'
interface Props {
    Title? : String | null
}

const TextComp : React.FC<Props> = ({Title} : Props) => {
    // const {Title} = props
  return (
    <Text>{Title}</Text>
  )
}

export default TextComp