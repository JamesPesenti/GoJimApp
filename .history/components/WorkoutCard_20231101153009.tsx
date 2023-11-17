import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import React from 'react'

export default function WorkoutCard ({ item, onPress }) {
   const { title, goalProgress, goalAmount } = item;
 
   return (
     <>
       <View style={styles.container}>
           {/* <DollarSign style={{marginTop: -20}} size={29} color={"gray"} /> */}
             <View style={styles.goalContainer}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginBottom: -5, marginRight: 10, }}>{title}</Text>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>{goalProgress} LB</Text>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>{goalAmount}</Text>
             </View> 
       </View>
     </>
   )
 }


 const styles = StyleSheet.create({
   container: {
     backgroundColor: "#031088",
     top: -20,
     paddingBottom: 0,
     padding: 15,
     left: 15,
     marginHorizontal: 20,
     borderRadius: 30
   },
   goalContainer: {
     backgroundColor: "#031088",
     opacity: 1,
     flexDirection: 'column', // Align items horizontally
     alignItems: 'flex-start', // Center vertically,
     paddingVertical: 15,
     paddingHorizontal: 15,
     gap: 10,
     borderRadius: 10
   },
 })