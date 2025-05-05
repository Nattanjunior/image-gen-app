import { Text, TextInput, View } from 'react-native';

export default function TextInputComponent({userInputValue}: {userInputValue: (value: string) => void}) {
  return (
    <View>
      <Text className='mt-2.5'>Enter your prompt</Text>
      <TextInput
        placeholder="Enter your prompt here"
        placeholderTextColor="#000"
        numberOfLines={5}

        multiline={true}

        textAlignVertical='top'
        style={{ height: 120 }}
        className='bg-gray-300 rounded-lg p-4 mt-2.5'

        onChangeText={(value)=> {userInputValue(value)}}
      />
    </View>
  );
}