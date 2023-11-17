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
   const [title, setTitle] = useState("")
   const [goalAmount, setGoalAmount] = useState("")
   const [goalProgress, setGoalProgress] = useState("")
 
   const handleModalClose = () => {
     Keyboard.dismiss()
   }
 
   const handleOnChangeText = (text, valueFor) => {
     if (valueFor === "title") setTitle(text)
     if (valueFor === "goalAmount") setGoalAmount(text)
     if (valueFor === "goalProgress") setGoalProgress(text)
   }
 
   const handleSubmit = () => {
     // if (!title.trim() && !desc.trim()) return onClose()
     onSubmit(title, goalAmount, goalProgress)
     setTitle("")
     setGoalAmount("")
     setGoalProgress("")
     onClose()
   }
 
   const closeModal = () => {
     setTitle("")
     setGoalAmount("")
     setGoalProgress("")
     onClose()
   }
   
   return (
     <>
      <StatusBar hidden />
       <Modal visible={visible} animationType='fade' >
        <View style={styles.textInputContainer}>
           {/* <View>
             <TextInput
                 placeholder='Goal name' 
                 placeholderTextColor='gray' 
                 value={title}
                 style={styles.textInput}
                 onChangeText={(text) => handleOnChangeText(text, "title")}
             />
           </View> */}
           <Text style={{fontSize: 24, textAlign: "center", color: "gray", }}>New Workout</Text>
           <View style={{ borderBottomWidth: .9, borderColor: 'gray'}}>
             <TextInput
               placeholder='Warm Up' 
               placeholderTextColor='#bfbfbf' 
               value={title}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "title")}
             />
           </View>
           <View style={{ borderBottomWidth: 1.2, borderColor: 'gray'}}>
             <TextInput
               placeholder='Notes' 
               placeholderTextColor='#bfbfbf' 
               value={title}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "title")}
             />
           </View>
           <View style={{ borderBottomWidth: 1.3, borderColor: 'gray'}}>
             <TextInput
               placeholder='Workout' 
               placeholderTextColor='#bfbfbf' 
               value={title}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "title")}
             />
           </View>
           <View style={{ borderBottomWidth: 1.6, borderColor: 'gray'}}>
             <TextInput 
               placeholder='LBS' 
               placeholderTextColor='#bfbfbf' 
               value={goalProgress}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "goalProgress")}
             />
           </View>
           <View style={{ borderBottomWidth: 2, borderColor: 'gray'}}>
             <TextInput 
               placeholder='Sets X Reps' 
               placeholderTextColor='#bfbfbf' 
               value={goalAmount}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "goalAmount")}
             />
           </View>
        </View>
        <View style={styles.buttonContainer}>
         <Pressable onPress={handleSubmit}>
           <Text style={styles.submitButton}>Submit</Text>
         </Pressable>
         {title.trim() || goalAmount.trim() || goalProgress.trim() ? (
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
     gap: 5
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