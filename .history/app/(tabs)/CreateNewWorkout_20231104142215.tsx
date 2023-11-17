import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodaysWorkout from '../../components/TodaysWorkout'

const CreateNewWorkout = () => {
  return (
    <View>
      <Text>Create a new workout</Text>
      <TodaysWorkout />
    </View>
  )
}

export default CreateNewWorkout

const styles = StyleSheet.create({})