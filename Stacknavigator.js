import React from 'react'
import { View, Text } from 'react-native'
import useAuth from './hooks/useAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Stacknavigator = () => {
    const { user } = useAuth()
    // console.log(user);
    return (<>
        <Stack.Navigator>
            {user ? (
                <>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    </>
    )
}
export default Stacknavigator