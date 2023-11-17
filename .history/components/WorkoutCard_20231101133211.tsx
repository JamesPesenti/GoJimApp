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
                <Text style={{ textAlign: "center", color: "gray", fontWeight: "bold", fontSize: 20, marginBottom: -5, marginRight: 10, }}>{title}</Text>
                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>{goalProgress} LB</Text>
                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>{goalAmount}</Text>
             </View>
       </View>
     </>
   )
 }


 const styles = StyleSheet.create({
   container: {
     backgroundColor: "#031088",
     top: 10,
     paddingBottom: 10,
     left: 15,
     marginHorizontal: 20,
     borderRadius: 10
   },
   goalContainer: {
     backgroundColor: "#031088",
     opacity: 1,
     flexDirection: 'column', // Align items horizontally
     alignItems: 'flex-start', // Center vertically,
     marginHorizontal: 0,
     marginBottom: 0,
     paddingTop: 10,
     paddingVertical: 10,
     gap: 10,
   },
   progressBar: {
     marginVertical: 10,
     height: 10,
     width: '80%',
     borderRadius: 15,
   }
 })