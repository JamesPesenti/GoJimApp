import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import React from 'react'

export default function WorkoutCard ({ item, onPress }) {
   const { title, goalProgress, goalAmount } = item;
 
   return (
     <>
       <View style={styles.container}>
           {/* <DollarSign style={{marginTop: -20}} size={29} color={"gray"} /> */}
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginBottom: 0 }}>{title}</Text>
             <View style={styles.goalContainer}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{goalProgress} LB</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{goalAmount}</Text>
             </View> 
       </View>
     </>
   )
 }


 const styles = StyleSheet.create({
   container: {
     flex: 1, 
     backgroundColor: "#031088",
     top: -10,
     paddingBottom: 20,
     paddingHorizontal: 40,
     padding: 35,
     left: 10,
     marginHorizontal: 20,
     borderRadius: 5
   },
   goalContainer: {
     backgroundColor: "#031088",
     opacity: 1,
     flexDirection: 'row', 
     alignItems: 'flex-start',
     paddingHorizontal: 0,
     gap: 8,
     borderRadius: 10
   },
 })