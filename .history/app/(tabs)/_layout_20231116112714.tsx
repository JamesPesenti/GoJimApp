import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Dumbbell, GanttChartSquare, Trophy, MoreHorizontal, Repeat, Weight } from 'lucide-react-native';
import { PlusCircle, Home, PiggyBank, Plus, ArrowRightLeft, CandlestickChart, UserSquare2 } from 'lucide-react-native';
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
          borderTopWidth: 0,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <Dumbbell strokeWidth={1} style={{ transform: [{rotate: '90deg'}]}} size={30} color="#00FFFF" />,
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
          tabBarIcon: () => <GanttChartSquare strokeWidth={1} size={30} color="#00FFFF" />,
        }}
      />
      <Tabs.Screen
        name="CreateNewWorkout"
        options={{
          presentation: 'modal',
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
              <Link href="/CreateNewWorkout" asChild>
              <Pressable>
                {({ pressed }) => (
                  <PlusCircle 
                    style={{marginTop: 10, backgroundColor: "transparent", borderRadius: 50}}
                    size={38} 
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
          tabBarIcon: () => <Trophy strokeWidth={1} style={{ transform: [{rotate: '0deg'}]}} size={30} color="#00FFFF" />,
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: 'More',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
