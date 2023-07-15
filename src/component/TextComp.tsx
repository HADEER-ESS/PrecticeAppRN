import React from 'react'
import { Text } from 'react-native'

export interface Props {
    Title : String
}

const TextComp : React.FC<Props> = props => {
    const {Title} = props
  return (
    <Text>{Title}</Text>
  )
}

export default TextComp