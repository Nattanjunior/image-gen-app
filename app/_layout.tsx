import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import "../global.css";

export default function RootLayout() {
  const tokenCache = {
    async getToken(key: string){
      try {
        const item = await SecureStore.getItemAsync(key);
        if (!item) return null;
        return JSON.parse(item);
      } catch (error) {
        console.error('Failed to retrieve token from cache', error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, JSON.stringify(value));
      } catch (error) {
        console.error('Failed to save token to cache', error);
        return
      }
    }
  }

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error('Missing Publishable Key');
  }

  //multiSessionMode={true}
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
    </Stack>
    </ClerkLoaded>
    </ClerkProvider>
  );
}
