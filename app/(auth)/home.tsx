import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const home = () => {
    const user= auth().currentUser;
    const router= useRouter();
  return (
    <View>
        <Text>Welcome {user?.email}</Text>
      <Button title='Sign out' onPress={()=>{auth().signOut()

        router.replace('/')
      }} />
    </View>
  )
}

export default home