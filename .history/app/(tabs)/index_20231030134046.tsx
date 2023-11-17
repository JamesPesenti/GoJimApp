import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodaysWorkout from "../TodaysWorkout"

export default function TabOneScreen() {

  const [data, setData] = useState("")

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Jim App</Text>
      <Text style={styles.title}>Track your progress in the Jim</Text>
      <TodaysWorkout />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
