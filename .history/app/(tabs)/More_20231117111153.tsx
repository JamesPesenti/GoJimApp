import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from "expo-linear-gradient"
import { Medal, Weight } from 'lucide-react-native';

const width = Dimensions.get("screen").width

export default function More() {
  return (
    <LinearGradient colors={["#162CF1", "#010a5e"]} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>More</Text>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        <View style={{flexDirection: "row", alignSelf: "center"}}>
          <View style={styles.achievedContainer}>
            <Medal strokeWidth={1} style={{ transform: [{rotate: '-20deg'}]}} size={28} color="#00FFFF" />
            <Text style={styles.goalsText}>Achieved Goals</Text>
          </View>
          <View style={styles.achievedContainer}>
            <Weight strokeWidth={1} style={{ transform: [{rotate: '0deg'}]}} size={28} color="#00FFFF" />
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
    marginVertical: 25
  },
  achievedContainer: {
    flexDirection: "row",
    padding: 20,
    paddingHorizontal: 50,
    width: 160,
    backgroundColor: "#031088",
  },
  oneRMContainer: {
    flexDirection: "row",
    padding: 20,
    paddingHorizontal: 0,
    // width: width,
    backgroundColor: "#031088",
  },
  goalsText: {
    color: "white",
  },
  separator: {
    marginVertical: 0,
    height: .2,
    width: '80%',
  },
});
