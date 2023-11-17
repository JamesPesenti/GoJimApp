import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";



function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
    <StatusBar style="light" backgroundColor='white' />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="CreateWorkoutModal" options={{ title: "", presentation: 'modal' }} />
          {/* <Stack.Screen name="TodaysWorkout" options={{  headerShown: false }} /> */}
          {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
        </Stack>
      </ThemeProvider>
    </>
  );
}
