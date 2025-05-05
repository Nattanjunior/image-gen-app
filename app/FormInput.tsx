import ImageUploadComponent from '@/components/FormInput/ImageUploadComponent';
import TextInputComponent from '@/components/FormInput/TextInputComponent';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function FormInput() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const [userInput, setUserInput] = useState<string>('');
  const [aiModel, setAiModel] = useState<any>({})
  const [userImage, setUserImage] = useState<string>('');

  useEffect(() => {
    setAiModel(params)
    navigation.setOptions({
      headerShown: true,
      headerTitle: params?.name
    })
  }, [])

  const handleGenerate = () => {
    console.log(userInput)
  }

  return (
    <View className='p-5 bg-white h-full'>
      <Text className='text-2xl font-bold text-black'>{aiModel?.name}</Text>

      <View>
        {aiModel?.userImageUpload != "true" ?
          <TextInputComponent userInputValue={(value)=>setUserInput(value)} /> : <ImageUploadComponent imageUploadValue={(value)=>setUserImage(value)} />}  

          <Text className='text-sm text-gray-500'>
            NOTE: 1 Credit will use to generate 1 AI image
          </Text>

          <TouchableOpacity className='bg-black text-white p-4 rounded-2xl mt-8 w-full'
            onPress={()=>handleGenerate()}
          >
            <Text className='text-white text-center text-xl'>Generate</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}