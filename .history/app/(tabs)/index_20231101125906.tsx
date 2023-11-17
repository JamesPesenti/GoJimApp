import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodaysWorkout from "../../components/TodaysWorkout"
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient"


export default function TabOneScreen() {

  const [data, setData] = useState("")

  useEffect(() => {

  }, [])

  return (
    <>
    <LinearGradient colors={["#081DD1", "#020e7d"]} style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="black" style="light" />
        <View style={styles.container}>
          <Text style={styles.title}>Track your progress in the Jim</Text>
          {/* <View style={styles.separator} lightColor="#031088" /> */}
          <TodaysWorkout />
        </View>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 50,
    backgroundColor: "transparent"
  },
  titleContainer: {
    paddingTop: 50,
    // backgroundColor: "white"
  },
  title: {
    color: "white",
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
    color: "#031088",
    marginVertical: 0,
    height: 20,
    width: '100%',
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
