import { FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import { Dumbbell, Trophy, GanttChartSquare, Repeat, Weight } from 'lucide-react-native';

export default function WorkoutCard ({ item }) {
   const { warmup, goals, notes, workout, lbs, setsReps } = item;

   const currentDate = new Date()
   const day = currentDate.getDate()
   const month = currentDate.getMonth() + 1
   const year = currentDate.getFullYear()

  const iconMap = {
    workout: <Dumbbell strokeWidth={1} style={{ transform: [{rotate: '0deg'}]}} size={30} color="#00FFFF" />,
    goals: <Trophy strokeWidth={1} size={30} color="#00FFFF" />, 
    notes: <GanttChartSquare strokeWidth={1} size={30} color="#00FFFF" />, 
    setsReps: <Repeat strokeWidth={1} size={30} color="#00FFFF" />, 
    lbs: <Weight strokeWidth={1} size={30} color="#00FFFF" />, 
  };


   return (
     <>
       <View style={styles.container}>
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, marginBottom: 0 }}>{month}/{day}/{year}</Text>
           {/* <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, marginBottom: 0 }}>Warmup {warmup}</Text>
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, marginBottom: 0 }}>{notes}</Text>
             <View style={styles.goalContainer}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{workout}</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{lbs}LB</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{setsReps}</Text>
             </View>  */}
             <View style={styles.thisWorkoutContainer}>
              <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>This Workout</Text>
              <Text style={{color: "white", fontSize: 13, fontWeight: "bold"}}>warmup {warmup}</Text>
                <View style={styles.gridContainer}>
                  <FlatList 
                    style={{flex: 1}}
                    columnWrapperStyle={{
                      justifyContent: "space-between",
                      marginVertical: 5,
                      gap: 5
                    }}
                    numColumns={2}
                    data={['workout', 'goals', 'setsReps', "lbs", 'notes', ]}
                    keyExtractor={(key) => key}
                    renderItem={({item: key}) => {
                      return (
                        <View style={{ backgroundColor: "#031088", flexDirection: 'row', alignItems: 'center' }}>
                          {iconMap[key]} 
                          <View style={{ marginHorizontal: 10, backgroundColor: "#031088",}}>
                              <Text style={{fontSize: 15, alignSelf: 'flex-start', color: "#00FFFF"}}>
                                {key === 'setsReps' 
                                  ? `${item[key].sets} sets ${item[key].reps} reps`
                                  : item[key]
                                }
                                {key === "lbs" && (
                                  <Text style={{color: '#00FFFF'}}> lbs</Text>
                                )}
                              </Text>
                              <View style={styles.separator} />
                            </View>
                        </View>
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
    //  flex: 1, 
     backgroundColor: "#031088",
     paddingHorizontal: 80,
     paddingVertical: 20,
     marginHorizontal: 10,
     right: 10,
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
     padding: 5,
   },
   gridContainer: {
    flexDirection: "row",
    backgroundColor: "#031088",
    height: 180,
    width: 300,
    padding: 20,
   },
   separator: {
    // height: "100%",
    // width: 1,
    // borderWidth: 1, 
    // borderColor: "white", 
    // borderStyle: "dotted",
   }
 })