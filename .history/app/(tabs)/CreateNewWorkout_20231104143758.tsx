import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodaysWorkout from '../../components/TodaysWorkout'
import { LinearGradient } from "expo-linear-gradient"

const CreateNewWorkout = () => {
  return (
    <LinearGradient colors={["#162CF1", "#020d6e"]} style={{flex: 1}}>
      <View style={styles.container}>
        <TodaysWorkout />
      </View> 
    </LinearGradient>
  )
}

export default CreateNewWorkout

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
})