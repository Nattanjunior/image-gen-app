import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/clerk-expo';
import { useContext } from 'react';
import { Image, Text, View } from 'react-native';

export default function Header() {
  const { user } = useUser()
  const {userDetail, setUserDetail} = useContext(UserDetailContext)

  return (
    <View className='flex-row justify-between' >
      <Text className='text-2xl font-bold text-black'>Imagin AI</Text>

      <View className='flex-row gap-2.5 justify-between'>

        <View className='flex-row gap-2.5 items-center border border-gray-300 rounded-[99px] px-1.5 '>
          <Image source={require('@/assets/images/coin.png')} className='rounded-full' style={{ width: 25, height: 25 }} />

          <Text>{userDetail?.credits}</Text>
        </View>


        <Image source={{ uri: user?.imageUrl }} className='w-10 h-10 rounded-full' />
      </View>
    </View>
  );
}