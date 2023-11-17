import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodaysWorkout from "../../components/TodaysWorkout"

export default function TabOneScreen() {

  const [data, setData] = useState("")

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track your progress in the Jim</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TodaysWorkout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091AAF"
    // backgroundColor: "#2e78b7"
  },
  titleContainer: {
    paddingTop: 50,
    
  },
  title: {
    color: "gray",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    top: 0,
  },
  listContainer: {
    marginVertical: 50
  },
  overview: {
    alignSelf: "flex-start",
    paddingTop: 40,
    color: "#626363", 
    fontWeight: "bold", 
    fontSize: 20, 
    left: 20, 
    marginVertical: 10
  },
  separator: {
    color: "#eee",
    marginVertical: 0,
    height: 1,
    width: '100%',
    borderRadius: 10,
  },
  achievements: {
    alignSelf: "flex-start",
    paddingTop: 50,
    color: "#626363", 
    fontWeight: "bold", 
    fontSize: 20, 
    left: 20, 
    marginVertical: 30
  }
});
