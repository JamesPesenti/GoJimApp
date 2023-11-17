import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function RootLayoutNav() {

  const DynamicStatusBar = () => {
    return <StatusBar animated={true} backgroundColor={"transparent"} barStyle="light-content" />;
  }

  return (
    <>
      <DynamicStatusBar />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="CreateWorkoutModal" options={{ title: "", presentation: 'modal' }} />
        </Stack>
    </>
  );
}
