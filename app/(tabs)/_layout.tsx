import { UserDetailContext } from '@/context/UserDetailContext';
import GlobalApi from '@/services/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useContext, useEffect } from 'react';



export default function TabsLayout() {

  const {user} = useUser()
  const {userDetail,setUserDetail} = useContext(UserDetailContext)

  useEffect(() => {
    user && verifyUser()
  }, [user])
  const verifyUser = async () => {
    const result = await GlobalApi.GetUserInfo(user?.primaryEmailAddress?.emailAddress as string)
    console.log(result.data.data)

    if(result.data.data.length != 0){
      setUserDetail(result.data.data)
      return;
    }

    try {
      const data = {
        UserEmail:user?.primaryEmailAddress?.emailAddress as string,
        UserName:user?.fullName as string,
      }
      const result = await GlobalApi.CreateUserInfo(JSON.stringify(data))
      console.log(result?.data.data)
      setUserDetail(result?.data.data)
    } catch (error) {
      console.log(error)
    }
  }

 return (
   <Tabs screenOptions={{headerShown: false}}>
    <Tabs.Screen name="home" options={{
      title: 'Home',
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="home" color={color} size={size} />
      ),
    }}/>
    <Tabs.Screen name="collection" options={{
      title: 'Collection',
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="folder" color={color} size={size} />
      ),
    }}/>  
    <Tabs.Screen name="profile" options={{
      title: 'Profile',
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="person" color={color} size={size} />
      ),
    }}/>
   </Tabs>
  );
}