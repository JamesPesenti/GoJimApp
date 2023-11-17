import { 
   TouchableWithoutFeedback, 
   Pressable,
   Modal, 
   StyleSheet, 
   TextInput, 
   Text,
   View, 
   StatusBar,
   Keyboard,
   Dimensions
 } from 'react-native'
 import { useState } from 'react'
 import DateTimePicker from '@react-native-community/datetimepicker';
 import { useRouter } from 'expo-router'
 import Button from './Button'
 
 
 const width = Dimensions.get("window").width
 
 const NewWorkoutModal = ({ visible, onSubmit, onClose }) => {
 
   // Goal data
   const [warmup, setWarmup] = useState("")
   const [goals, setGoals] = useState("")
   const [notes, setNotes] = useState("")
   const [workout, setWorkout] = useState("")
   const [lbs, setLbs] = useState("")
   const [setsReps, setSetsReps] = useState("")
 
   const handleModalClose = () => {
     Keyboard.dismiss()
   }
 
   const handleOnChangeText = (text, valueFor) => {
     if (valueFor === "warmup") setWarmup(text)
     if (valueFor === "goals") setGoals(text)
     if (valueFor === "notes") setNotes(text)
     if (valueFor === "workout") setWorkout(text)
     if (valueFor === "lbs") setLbs(text)
     if (valueFor === "setsReps") setSetsReps(text)
   }
 
   const handleSubmit = () => {
     // if (!title.trim() && !desc.trim()) return onClose()
     onSubmit(warmup, goals, notes, workout, lbs, setsReps)
     setWarmup("")
     setGoals("")
     setNotes("")
     setWorkout("")
     setLbs("")
     setSetsReps("")
     onClose()
   }
 
   const closeModal = () => {
     setWarmup("")
     setGoals("")
     setNotes("")
     setWorkout("")
     setSetsReps("")
     setLbs("")
     onClose()
   }

   const currentDate = new Date()
   const day = currentDate.getDate()
   const month = currentDate.getMonth() + 1
   const year = currentDate.getFullYear()
   
   return (
     <>
      {/* <StatusBar hidden /> */}
       <Modal visible={visible} animationType='fade' >
        <View style={styles.textInputContainer}>
           <Text style={{fontSize: 24, textAlign: "center", color: "gray", }}>New Workout {month}.{day}.{year}</Text>
           <View style={{ marginBottom: 10,  borderColor: 'gray'}}>
             <TextInput
               placeholder='Warm Up' 
               placeholderTextColor='#bfbfbf' 
               value={warmup}
               style={styles.warmUp}
               onChangeText={(text) => handleOnChangeText(text, "warmup")}
             />
           </View>
           <View style={{ borderBottomWidth: 1.3, borderColor: 'gray'}}>
             <TextInput
               placeholder='Workout' 
               placeholderTextColor='#bfbfbf' 
               value={workout}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "workout")}
             />
           </View>
           <View style={{ borderBottomWidth: 1.6, borderColor: 'gray'}}>
             <TextInput 
               placeholder='LBS' 
               placeholderTextColor='#bfbfbf' 
               value={lbs}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "lbs")}
             />
           </View>
           <View style={{ borderBottomWidth: 1.2, borderColor: 'gray'}}>
             <TextInput
               placeholder='Goals' 
               placeholderTextColor='#bfbfbf' 
               value={goals}
               style={styles.goals}
               onChangeText={(text) => handleOnChangeText(text, "goals")}
             />
           </View>
           <View style={{ borderBottomWidth: 2, borderColor: 'gray'}}>
             <TextInput 
               placeholder='Sets X Reps' 
               placeholderTextColor='#bfbfbf' 
               value={setsReps}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "setsReps")}
             />
           </View>
           <View style={{ marginVertical: 20, borderBottomWidth: 1.2, borderColor: 'gray'}}>
             <TextInput
               placeholder='Notes' 
               placeholderTextColor='#bfbfbf' 
               value={notes}
               style={styles.notes}
               onChangeText={(text) => handleOnChangeText(text, "notes")}
             />
           </View>
        </View>
        <View style={styles.buttonContainer}>
         <Pressable onPress={handleSubmit}>
           <Text style={styles.submitButton}>Submit</Text>
         </Pressable>
         {workout.trim() || warmup.trim() || goals.trim() ? (
           <Pressable 
             onPress={onClose}
             style={styles.button}
           >
             <Text style={styles.buttonIcon}>X</Text>
           </Pressable>
         ) : null
        }
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
           <View style={[styles.modalBackground, StyleSheet.absoluteFillObject]}/>
        </TouchableWithoutFeedback>
       </Modal>
     </>
   )
 }
 
 export default NewWorkoutModal
 
 const styles = StyleSheet.create({
   textInputContainer: {
     justifyContent: 'center',
     alignSelf: 'center',
     margin: 20,
     padding: 20,
     gap: 5
   },
   warmUp: {
     textAlign: 'center',
     paddingHorizontal: 40,
     paddingTop: 10,
     borderWidth: 0,
     width: 450,
     borderRadius: 5,
     fontSize: 20,
     marginBottom: 5,
   },
   goals: {
    // textAlign: 'center',
    paddingHorizontal: 40,
    paddingTop: 10,
    borderWidth: 0,
    left: 20,
    right: 20,
    width: 450,
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 5,
  },
   notes: {
    // textAlign: 'center',
    paddingHorizontal: 40,
    paddingTop: 10,
    borderWidth: 0,
    left: 20,
    right: 20,
    width: 450,
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 5,
  },
   textInput: {
     paddingHorizontal: 40,
     paddingTop: 10,
     borderWidth: 0,
     left: 20,
     right: 20,
     width: 450,
     borderRadius: 5,
     fontSize: 20,
     marginBottom: 5,
   },
   buttonContainer: {
     flexDirection: "row",
     alignItems: "center",
     gap: 20,
     justifyContent: "center",
   },
   submitButton: {
     fontSize: 18,
     color: "#bfbfbf",
     fontWeight: "bold",
  }, 
  button: {
     padding: 0,
     width: 35,
     height: 35,
     backgroundColor: "gainsboro",
     borderRadius: 100,
  },
  buttonIcon: {
     top: 8,
     color: "white",
     alignItems: "center",
     justifyContent: "center",
     alignSelf: "center",
  },
   modalBackground: {
     flex: 1,
     zIndex: -1
   }
 })