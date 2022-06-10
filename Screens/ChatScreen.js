import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const ChatScreen = () => {
  // const {user} = useAuth()
  return (
    <View>
      <Text>Hey the user can chat here😊</Text>
    </View>
  )
}

export default ChatScreen