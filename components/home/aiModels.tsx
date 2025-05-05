import GlobalApi from '@/services/GlobalApi';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
export default function AiModels({ type }: { type: string }) {
  
  const [aiModelList, setAiModelList] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    GetAiModelList()
  }, [])

  const GetAiModelList = async () => {
    const response = await GlobalApi.GetAiModelList(type)
    setAiModelList(response.data.data)
  }

  const onPressAiModel = () => {
    router.push({pathname: '/FormInput',})
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
          <TouchableOpacity className='mr-4' onPress={() => onPressAiModel()}>
            <Image source={{ uri: item?.banner?.url }}
              className='w-[140px] h-[140px] rounded-2xl'
            />
            <Text className='absolute bottom-2 left-2 text-white text-lg font-medium'>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}