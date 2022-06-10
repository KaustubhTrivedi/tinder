import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

// import tw from 'twrnc'r

const LoginScreen = () => {
  const [accessToken, setAccessToken] = useState()
  const [userinfo, setUserInfo] = useState()

  const { promptAsync } = useAuth()


  const signIn = () => {
    promptAsync()
    // useEffect(() => {
    //   console.log(accessToken)
    // }, [accessToken])
  }

  // console.log(response.authentication)
  return (
    <View>
      <Text>Login to the App</Text>
      <Button title="Login with Google" onPress={signIn} />
    </View>
  )
}
export default LoginScreen