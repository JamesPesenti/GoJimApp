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
 
 const NoteInputModal = ({ visible, onSubmit, onClose }) => {
 
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
           <Text style={{fontSize: 24, textAlign: "center", color: "gray", }}>New Goal</Text>
           <View style={{ borderBottomWidth: 2, borderColor: 'gray'}}>
             <TextInput
               placeholder='Goal name' 
               placeholderTextColor='gainsboro' 
               value={title}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "title")}
             />
             </View>
           <View style={{ borderBottomWidth: 2, borderColor: 'black'}}>
             <TextInput 
               placeholder='Current amount saved' 
               placeholderTextColor='gainsboro' 
               value={goalProgress}
               style={styles.textInput}
               onChangeText={(text) => handleOnChangeText(text, "goalProgress")}
             />
           </View>
           <View style={{ borderBottomWidth: 2, borderColor: 'black'}}>
             <TextInput 
               placeholder='Goal amount' 
               placeholderTextColor='gainsboro' 
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
 
 export default NoteInputModal
 
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
     color: "gainsboro",
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