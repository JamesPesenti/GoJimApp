import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodaysWorkout from '../../components/TodaysWorkout'

const CreateNewWorkout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new workout</Text>
      <TodaysWorkout />
    </View>
  )
}

export default CreateNewWorkout

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: "transparent"
  },
})