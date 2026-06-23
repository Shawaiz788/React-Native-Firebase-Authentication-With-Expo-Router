import auth from '@react-native-firebase/auth';
import React from 'react';
import { Button, View } from 'react-native';

const home = () => {
    const user= auth().currentUser;
  return (
    <View>
      <Button title='Sign out' onPress={()=>auth().signOut()} />
    </View>
  )
}

export default home