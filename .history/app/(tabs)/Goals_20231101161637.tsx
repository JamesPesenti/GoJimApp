import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from "expo-linear-gradient"


export default function Goals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Goals</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
