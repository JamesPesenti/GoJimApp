import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return null
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "gainsboro",
        tabBarActiveTintColor: "#00FFFF",
        tabBarInactiveBackgroundColor: "#010a5e",
        tabBarActiveBackgroundColor: "#010a5e",
        tabBarStyle: {
          borderColor: "#010a5e",
          borderTopWidth: .24,

        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (            
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Log"
        options={{
          title: 'Log',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="CreateNewWorkout"
        options={{
          presentation: 'modal',
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
              <Link href="/createWorkoutModal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <PlusCircle 
                    style={{marginTop: 8, backgroundColor: "white", borderRadius: 50}}
                    size={47} 
                    color={color}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Goals"
        options={{
          title: 'Goals',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
