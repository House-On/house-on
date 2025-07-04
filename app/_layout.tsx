
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  
  return <SafeAreaProvider>
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(main)/(tabs)" />
      <Stack.Screen name="(main)/perfil"/>
    </Stack>
  </SafeAreaProvider>
}
