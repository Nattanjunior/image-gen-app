import AiFeaturedModel from '@/components/home/AiFeaturedModel';
import AiModels from '@/components/home/aiModels';
import Banner from '@/components/home/Banner';
import Header from '@/components/home/Header';
import { FlatList, View } from 'react-native';

export default function Home() {
  return (
    <FlatList className='p-5 mt-10'
      data={[1]}
      renderItem={(item) => (
        <View>
          {/* Header */}
          <Header />
          {/* Banner */}
          <Banner />
          {/* Featured List */}
          <AiFeaturedModel />

          {/* Ai Models (Avatar) */}
          <AiModels type='avatar' />

          {/* Ai Models (Style) */}
          <AiModels type='style' />

          <View className='h-[100px]'></View>
        </View>
      )}
    >

    </FlatList>
  );
}