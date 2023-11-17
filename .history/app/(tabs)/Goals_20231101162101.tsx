import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from "expo-linear-gradient"


export default function Goals() {
  return (
    <LinearGradient colors={["#162CF1", "#010a5e"]} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Workout Goals</Text>
        <View style={styles.achievedContainer}>
          <Text>Achieved Goals</Text>
        </View>
        <View style={styles.oneRMContainer}>
          <Text>One-Rep Max</Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
  },
  achievedContainer: {

  },
  oneRMContainer: {

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
