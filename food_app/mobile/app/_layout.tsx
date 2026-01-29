import { Slot } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import SafeScreen from "@/components/Others/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}

{
  /* <SafeAreaView style={{ flex: 1 }}>
    <Stack screenOptions={{ headerShown: false }} />
    <StatusBar style="dark" /> 
</SafeAreaView> */
}
