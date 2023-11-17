import { FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import { Dumbbell, GanttChartSquare, Repeat, Weight } from 'lucide-react-native';

export default function WorkoutCard ({ item }) {
   const { warmup, notes, workout, lbs, setsReps } = item;

   const currentDate = new Date()
   const day = currentDate.getDate()
   const month = currentDate.getMonth() + 1
   const year = currentDate.getFullYear()

  //  const data = [
  //   {
  //     "id": "1",
  //     "type": "Exercise",
  //     "num": "DB Bench"
  //   },
  //   {
  //     "id": "2",
  //     "type": "Sets",
  //     "num": "4"
  //   },
  //   {
  //     "id": "3",
  //     "type": "Reps",
  //     "num": "10"
  //   },
  //   {
  //     "id": "4",
  //     "type": "Weight Lifted",
  //     "num": "70LB"
  //   }
  // ]

  const iconMap = {
    warmup: <Dumbbell strokeWidth={1} style={{ transform: [{rotate: '0deg'}]}} size={30} color="#00FFFF" />,
    notes: <GanttChartSquare strokeWidth={1} size={30} color="#00FFFF" />, 
    workout: <Repeat strokeWidth={1} size={30} color="#00FFFF" />, 
    lbs: <Weight strokeWidth={1} size={30} color="#00FFFF" />, 
  };


   return (
     <>
       <View style={styles.container}>
           {/* <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, marginBottom: 0 }}>{month}/{day}/{year}</Text>
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, marginBottom: 0 }}>Warmup {warmup}</Text>
           <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, marginBottom: 0 }}>{notes}</Text>
             <View style={styles.goalContainer}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{workout}</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{lbs}LB</Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{setsReps}</Text>
             </View>  */}
             <View style={styles.thisWorkoutContainer}>
              <Text style={{color: "white", fontSize: 18, fontWeight: "bold"}}>This Workout</Text>
                <View style={styles.gridContainer}>
                  <FlatList 
                    style={{flex: 1}}
                    columnWrapperStyle={{
                      justifyContent: "space-between",
                      marginVertical: 5,
                      gap: 5
                    }}
                    numColumns={2}
                    data={Object.keys(item)}
                    keyExtractor={(key) => key}
                    renderItem={({item: key}) => {
                      return (
                        <>
                          {iconMap[key]} 
                          <View style={{flex: 1, marginHorizontal: 10, backgroundColor: "#031088",}}>
                              <Text style={{fontSize: 15, alignSelf: 'flex-start', color: "#00FFFF",}}>{item[key]}</Text>
                              <Text style={{color: "white"}}>{item.notes}</Text>
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
    // borderWidth: 1, 
    // borderColor: "white", 
    // borderStyle: "dotted",
   }
 })