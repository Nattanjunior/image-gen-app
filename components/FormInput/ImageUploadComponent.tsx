import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function ImageUploadComponent({ imageUploadValue }: { imageUploadValue: (value: string) => void }) {

  const [image, setImage] = useState<string>('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      imageUploadValue(result.assets[0].uri);
      setImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View>
      <Text>Upload your image</Text>
      <TouchableOpacity className='mt-2.5 bg-gray-200 rounded-2xl p-12 w-full items-center'
        onPress={pickImage}
      >
        {image ? <Image source={{ uri: image }} className='w-full h-[300px] rounded-2xl' /> : <Image source={require('@/assets/images/upload.png')}
          className='w-[70px] h-[70px]'
        />}
      </TouchableOpacity>
    </View>
  );
}