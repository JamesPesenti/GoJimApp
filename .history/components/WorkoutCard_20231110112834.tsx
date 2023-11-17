import { FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import { Coins } from 'lucide-react-native';

export default function WorkoutCard ({ item, onPress }) {
   const { warmup, notes, workout, lbs, setsReps } = item;

   const currentDate = new Date()
   const day = currentDate.getDate()
   const month = currentDate.getMonth() + 1
   const year = currentDate.getFullYear()

   const data = [
    {
      "id": "1",
      "type": "Exercises",
      "num": "4"
    },
    {
      "id": "2",
      "type": "Sets",
      "num": "12"
    },
    {
      "id": "3",
      "type": "Reps",
      "num": "8"
    },
    {
      "id": "4",
      "type": "Weight Lifted",
      "num": "5000 lb"
    }
  ]


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
              <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>This Workout</Text>
                <View style={styles.gridContainer}>
                  <FlatList 
                    style={{flex: 1}}
                    columnWrapperStyle={{
                      justifyContent: "space-between",
                    }}
                    numColumns={2}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                      return (
                        <>
                          <Coins style={{marginHorizontal: 10, }} size={30} color={"#00FFFF"} />
                            <View style={{flex: 1, marginVertical: 10, backgroundColor: "#031088",}}>
                              <Text style={{fontSize: 18, alignSelf: 'flex-start', color: "#00FFFF",}}>{item.num}</Text>
                              <Text style={{color: "white"}}>{item.type}</Text>
                              <View style={styles.separator} />
                            </View>
                        </>
                      )
                    }}
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
     paddingVertical: 40,
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
     backgroundColor: "#031088",
     padding: 20,
   },
   gridContainer: {
    flexDirection: "row",
    backgroundColor: "#031088",
    padding: 20,
   },
   separator: {
    // height: "100%",
    // width: 1,
    borderWidth: 1, 
    borderColor: "white", 
    borderStyle: "dotted",
   }
 })