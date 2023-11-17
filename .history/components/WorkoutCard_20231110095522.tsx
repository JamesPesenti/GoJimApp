import { FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import React from 'react'

export default function WorkoutCard ({ item, onPress }) {
   const { warmup, notes, workout, lbs, setsReps } = item;

   const currentDate = new Date()
   const day = currentDate.getDate()
   const month = currentDate.getMonth() + 1
   const year = currentDate.getFullYear()


   return (
     <>
       <View style={styles.container}>
           {/* <DollarSign style={{marginTop: -20}} size={29} color={"gray"} /> */}
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, marginBottom: 0 }}>{month}/{day}/{year}</Text>
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, marginBottom: 0 }}>Warmup {warmup}</Text>
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, marginBottom: 0 }}>{notes}</Text>
             <View style={styles.goalContainer}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{workout}</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{lbs}LB</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{setsReps}</Text>
             </View> 
             <View style={styles.thisWorkoutContainer}>
              <Text>This Workout</Text>
                <View style={styles.gridContainer}>
                  <FlatList 
                    style={{flex: 1}}
                    numColumns={4}
                    renderItem={() => (
                      <>
                        <Text>Exercises</Text>
                        <Text>Sets</Text>
                        <Text>Reps</Text>
                        <Text>Volume (LBS)</Text>
                      </>
                    )}
                  />
                </View>
             </View>
       </View>
     </>
   )
 }


 const styles = StyleSheet.create({
   container: {
     flex: 1, 
     backgroundColor: "#031088",
     paddingHorizontal: 200,
     paddingVertical: 100,
     marginHorizontal: 10,
     left: 10,
     borderRadius: 5
   },
   goalContainer: {
     backgroundColor: "#031088",
     opacity: 1,
     flexDirection: 'row', 
     alignItems: 'flex-start',
     gap: 8,
     borderRadius: 10
   },
   thisWorkoutContainer: {
    
     padding: 20
   },
   gridContainer: {
    flexDirection: "row",
    backgroundColor: "#031088",
    padding: 20
   }
 })