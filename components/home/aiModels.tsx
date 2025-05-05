import GlobalApi from '@/services/GlobalApi';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
export default function AiModels({ type }: { type: string }) {
  
  const [aiModelList, setAiModelList] = useState<any[]>([])

  useEffect(() => {
    GetAiModelList()
  }, [])

  const GetAiModelList = async () => {
    const response = await GlobalApi.GetAiModelList(type)
    console.log(response)
    setAiModelList(response.data.data)
  }


  return (
    <View>
      <Text className='text-2xl font-bold mt-5'>{type?.toUpperCase()}</Text>
      <FlatList
        data={aiModelList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        renderItem={({ item }) => (
          <View className='mr-4'>
            <Image source={{ uri: item?.banner?.url }}
              className='w-[140px] h-[140px] rounded-2xl'
            />
            <Text className='absolute bottom-2 left-2 text-white text-lg font-medium'>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  );
}