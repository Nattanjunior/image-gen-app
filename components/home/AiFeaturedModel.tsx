import GlobalApi from '@/services/GlobalApi';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

export default function AiFeaturedModel() {
  const [aiModelList, setAiModelList] = useState<any[]>([])

  useEffect(() => {
    GetAiModelList()
  }, [])

  const GetAiModelList = async () => {
    console.log('Iniciando chamada da API...')
    try {
      const response = await GlobalApi.GetFeaturedCategoryList()
      console.log('Resposta da API:', response)
      console.log('Dados:', response.data.data)
      setAiModelList(response.data.data)
    } catch (error) {
      console.error('Erro ao buscar modelos:', error)
    }
  }
  return (
    <View className='mt-5'>
      <Text className='text-2xl font-bold'>FEATURED</Text>
      <FlatList
        data={aiModelList}
        className='mt-2'
        numColumns={4}
        renderItem={({ item }) => (
          <View className='flex-1 items-center'>
            <View className='p-2.5 rounded-lg bg-gray-300'>
              <Image
                source={{ uri: item?.icon?.url }}
                className='w-9 h-9'
              />
            </View>
            <Text className='text-[11px] text-center mt-2 text-black'>{item?.name as string}</Text>
          </View>
        )}
      />
    </View>
  );
}