import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import tw from 'twrnc'
const HomeScreen = () => {
  const navigation = useNavigation()
  const { logout } = useAuth()
  return (
    <View style={tw`my-auto`}>
      <Text style={tw`mx-auto`}>User has logged in</Text>
      <View style={tw`mx-5 my-4`}>
        <Button title='Go to Chat Screen' onPress={() => navigation.navigate('Chat')} />
      </View>
      <View style={tw`mx-5 my-4`}>
        <Button title='Logout' onPress={logout} />
      </View>
    </View>

  )
}

export default HomeScreen