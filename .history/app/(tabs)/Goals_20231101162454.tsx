import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from "expo-linear-gradient"


export default function Goals() {
  return (
    <LinearGradient colors={["#162CF1", "#010a5e"]} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Workout Goals</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flexDirection: "row"}}>
          <View style={styles.achievedContainer}>
            <Text style={styles.goalsText}>Achieved Goals</Text>
          </View>
          <View style={styles.oneRMContainer}>
            <Text style={styles.goalsText}>One-Rep Max</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
  },
  achievedContainer: {
    padding: 20,
    width: 100,
    backgroundColor: "#031088",
  },
  oneRMContainer: {
    padding: 20,
    width: 100,
    backgroundColor: "#031088",
  },
  goalsText: {
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
