import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import * as webBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const useWarnUpBrowser = () => {
  React.useEffect(() => {
  void webBrowser.warmUpAsync(); 
  return () => {
    void webBrowser.coolDownAsync();
  }
  }, []);
};

webBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarnUpBrowser();

const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'});

const onPress = React.useCallback(async () => {
  try {
    const {createdSessionId, signIn, signUp, setActive} = await startOAuthFlow({
      redirectUrl: Linking.createURL('/dashboard', {scheme: 'aiimagegenapp'})
    });

    if (createdSessionId) {
      //setActive?.({session: createdSessionId});
    } else {
      
    }
    
  } catch (error) {
    console.error('Failed to sign in', error);
  }
}, []);

 return (
   <View>
    <Image source={require('../../assets/images/login.jpeg')} className='w-full h-[600px]' />

    <View className='p-6 mt-[-20px] bg-white h-[600px] rounded-t-[30px]'> 
      <Text className='font-bold text-2xl text-center'>Bem-vindo ao ImaginAI</Text>

      <Text className='text-center text-gray-500 mt-4'>Crie arte AI em apenas um clique</Text>

      <TouchableOpacity className=' bg-black w-full p-5 rounded-full mt-5  text-base' onPress={onPress}><Text className='text-white text-center'>Continue</Text></TouchableOpacity>
      
      <Text className='text-gray-500 text-center w-full p-5 rounded-full mt-2  text-sm'>Ao continuar, você concorda com os nossos <Text className='text-black font-bold'>Termos e condições de uso</Text></Text>

    </View>
   </View>
  );
}