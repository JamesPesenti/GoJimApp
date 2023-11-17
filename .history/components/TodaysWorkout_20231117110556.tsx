import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
   Pressable,
   TouchableOpacity, 
   FlatList, 
   TouchableWithoutFeedback, 
   StyleSheet, 
   Text, 
   View, 
   Keyboard 
} from 'react-native';
import { useState, useEffect } from 'react';
import InputModal from './InputModal';
import { Link, useRouter } from "expo-router";
import WorkoutCard from "./WorkoutCard"
import { AntDesign } from '@expo/vector-icons';
import NewWorkoutModal from './NewWorkoutModal';


const TodaysWorkout = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const [exercises, setExercises] = useState([]);
   const [data, setData] = useState()
 
   const findExercise = async () => {
     AsyncStorage.clear()
   }
 
   useEffect(() => {
     findExercise();
   }, []);
 
   const handleOnSubmit = async (warmup, goals, notes, workout, lbs, setsReps) => {
     const exercise = { 
      id: Date.now(), 
      warmup, 
      goals, 
      notes, 
      workout, 
      lbs, 
      setsReps : {
        sets: parseInt(setsReps.split('')[0]), 
        reps: parseInt(setsReps.split(' ')[2]),
        weight: parseInt(lbs),
      },
      time: Date.now() 
    };
    
     const updatedExercises = [...exercises, exercise];
     setExercises(updatedExercises);
     await AsyncStorage.setItem("exercises", JSON.stringify(updatedExercises));
   }

   const handleUpdate = (updatedData) => {
    setData(updatedData)
   }

  //  const totalExercises = exercises.length
  //  const totalSets = exercises.reduce((acc, exercise) => acc + exercise.setsReps.sets, 0);
  //  const totalReps = exercises.reduce((acc, exercise) => acc + exercise.setsReps.reps, 0);
  //  const totalWeight = exercises.reduce((acc, exercise) => acc + exercise.setsReps.weight, 0);
  
   return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         itemVisiblePercentThreshold={20}
         style={{paddingLeft: 20}}
         data={exercises}
         keyExtractor={item => item.id.toString()}
         renderItem={({ item }) => (
          // <Link 
          //   href={{ 
          //     pathname: "/NoteDetail", 
          //     params: { 
          //       title: item.title, 
          //       goalAmount: item.goalAmount, 
          //       goalProgress: item.goalProgress
          //     } 
          //   }}
          // >
            <TouchableOpacity>
              <WorkoutCard 
                item={item} 
                onUpdate={handleUpdate}
              />
            </TouchableOpacity>
          // </Link>
         )}
      />
        {!exercises.length ? (
            <View style={[StyleSheet.absoluteFillObject, styles.addNotesContainer]}>
              <Text style={styles.addNotes}>Create New Workout</Text>
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="plus" size={22} color="gray" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <NewWorkoutModal
        visible={modalVisible}
        onSubmit={handleOnSubmit}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  addNotesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  addNotes: {
    top: 20,
    left: 50,
    color: "white",
    paddingHorizontal: 10,
    textTransform: "uppercase",
    opacity: 1,
  },
  fab: {
    top: 10,
    left: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
    width: 30,
    height: 30,
    elevation: 5,
  },
})

export default TodaysWorkout

