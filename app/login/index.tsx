import { Image, Text, View } from 'react-native';
export default function LoginScreen() {
 return (
   <View>
    <Image source={require('../../assets/images/login.jpeg')} className='w-full h-[600px]' />

    <View className='p-6 mt-[-20px] bg-white h-[600px] rounded-t-[30px]'> 
      <Text className='font-bold text-2xl text-center'>Bem-vindo ao ImaginAI</Text>

      <Text className='text-center text-gray-500 mt-4'>Crie arte AI em apenas um clique</Text>

      <View className='flex-row items-center justify-center'>
        <Text className='text-white bg-black text-center w-full p-5 rounded-full mt-5  text-base'>Continue</Text>
      </View>

      
      <Text className='text-gray-500 text-center w-full p-5 rounded-full mt-2  text-sm'>Ao continuar, você concorda com os nossos <Text className='text-black font-bold'>Termos e condições de uso</Text></Text>

    </View>
   </View>
  );
}