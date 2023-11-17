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


const TodaysWorkout = () => {

   const [modalVisible, setModalVisible] = useState(false);
   const [workouts, setWorkouts] = useState([]);
 
   const findWorkout = async () => {
     const result = await AsyncStorage.getItem("workouts");
     if (result !== null) setWorkouts(JSON.parse(result));
   }
 
   useEffect(() => {
     findWorkout();
   }, []);
 
   const handleOnSubmit = async (title, goalAmount, goalProgress) => {
     const workout = { id: Date.now(), title, goalAmount, goalProgress, time: Date.now() };
     const updatedWorkouts = [...workouts, workout];
     setWorkouts(updatedWorkouts);
     await AsyncStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
   }
  
   return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         itemVisiblePercentThreshold={20}
         style={{paddingLeft: 20}}
         data={workouts}
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
              />
            </TouchableOpacity>
          // </Link>
         )}
      />
        {!workouts.length ? (
            <View style={[StyleSheet.absoluteFillObject, styles.addNotesContainer]}>
              <Text style={styles.addNotes}>Today's Workout</Text>
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="plus" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <InputModal
        visible={modalVisible}
        onSubmit={handleOnSubmit}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    top: -20,
    left: 15,
    marginHorizontal: 20,
  },
  goalContainer: {
    backgroundColor: "white",
    opacity: 1,
    flexDirection: 'column', // Align items horizontally
    alignItems: 'flex-start', // Center vertically,
    marginHorizontal: -10,
    top: 50,
    marginBottom: 30,
    paddingVertical: 10,
    gap: 10
  },
  progressBar: {
    marginVertical: 10,
    height: 10,
    width: '80%',
    borderRadius: 15,
  },
  addNotesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNotes: {
    top: 20,
    color: "white",
    paddingHorizontal: 100,
    textTransform: "uppercase",
    opacity: 1,
  },
  fab: {
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
})

export default TodaysWorkout

