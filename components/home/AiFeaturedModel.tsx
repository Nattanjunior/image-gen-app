import GlobalApi from '@/services/GlobalApi';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function AiFeaturedModel() {
  const [aiModelList, setAiModelList] = useState<any[]>([])
  const router = useRouter()


  useEffect(() => {
    GetAiModelList()
  }, [])

  const GetAiModelList = async () => {
    try {
      const response = await GlobalApi.GetFeaturedCategoryList()
      setAiModelList(response.data.data)
    } catch (error) {
      console.error('Erro ao buscar modelos:', error)
    }
  }

  const onPressAiModel = (item: any) => {  
    router.push({
      pathname: '/FormInput',
      params: item
    })
  }

  return (
    <View className='mt-5'>
      <Text className='text-2xl font-bold'>FEATURED</Text>
      <FlatList
        data={aiModelList}
        className='mt-2'
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity className='flex-1 items-center' onPress={() => onPressAiModel(item)}>
            <View className='p-2.5 rounded-lg bg-gray-300'>
              <Image
                source={{ uri: item?.icon?.url }}
                className='w-9 h-9'
              />
            </View>
            <Text className='text-[11px] text-center mt-2 text-black'>{item?.name as string}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}