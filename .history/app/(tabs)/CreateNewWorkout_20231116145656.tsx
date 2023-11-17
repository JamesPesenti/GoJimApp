import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodaysWorkout from '../../components/TodaysWorkout'
import { LinearGradient } from "expo-linear-gradient"

const CreateNewWorkout = () => {
  return (
    <LinearGradient colors={["#162CF1", "#020d6e"]} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Workout</Text>
        {/* <TodaysWorkout /> */}
        <Text>Hello World</Text>
      </View> 
    </LinearGradient>
  )
}

export default CreateNewWorkout

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 30,
  },
})