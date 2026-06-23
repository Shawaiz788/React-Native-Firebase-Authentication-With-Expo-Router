import React, { useState } from 'react';
import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { FirebaseError } from 'firebase/app';
const index = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUp = async ()=>{
      setLoading(true);
      try{
        await auth().createUserWithEmailAndPassword(email,password);
        alert('check your emails!')
      }catch (e:any){
        const err= e as FirebaseError;
        alert('Registration Failed:'+err.message);
      }finally{
        setLoading(false);
      }

      
  }

  const signIn = async () => {
  setLoading(true);

  try {
    await auth().signInWithEmailAndPassword(email, password);
    router.replace('/(auth)/home');
  } catch (e: any) {
    const err = e as FirebaseError;
    alert('Login Failed: ' + err.message);
  } finally {
    setLoading(false);
  }
};
  return (
    <View style={styles.container}>
  <KeyboardAvoidingView behavior="padding">
    <Text>Email</Text>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      autoCapitalize="none"
      keyboardType="email-address"
      placeholder='Email'
    />

    <Text>Password</Text>
    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      placeholder='Password'
    />
{loading ? (
<ActivityIndicator size={'small'} style={{ margin: 28 }} />
) :(<>

<Button onPress={signIn} title="Login" />
<Button onPress={signUp} title="Create account" />
</>
  )}
  </KeyboardAvoidingView>
</View>
  )
}
const styles=StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
},input:{
  marginVertical:4,
  height:50,
  borderWidth:1,
  borderRadius:4,
  padding:10,
  backgroundColor:"white",

}


});
export default index