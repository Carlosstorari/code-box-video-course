import { View, Text, Button } from 'react-native'
import React from 'react'
import { client } from '../Utils/KindeConfig';
import { AuthContext } from '../../App';
import { useContext } from 'react';

export default function HomeScreen() {
    const { auth, setAuth } = useContext(AuthContext);
    const handleLogout = async () => {
        const loggedOut = await client.logout();
        if (loggedOut) {
            setAuth(false);
        }
    }
  return (
    <View>
          <Text>HomeScreen</Text>
          <Button title='Logout' onPress={handleLogout}/>
    </View>
  )
}