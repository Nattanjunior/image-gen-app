import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Banner() {
  return (
    <View className='mt-5 '>
      <Image source={require('@/assets/images/banner.png')} className='w-full h-[140px] rounded-2xl' />

      <View className='absolute p-4'>
        <Text className='text-white text-3xl font-bold'>Turn words</Text>
        <Text className='text-yellow-500 text-3xl font-bold'>into Art</Text>
      </View>

      <TouchableOpacity className='absolute bottom-0 right-0 px-4 py-2 m-4 bg-yellow-500 rounded-md'>
        <Text >Explore</Text>
      </TouchableOpacity>
    </View>
  );
}