import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { back, bicep, chest, shoulder, tricep, quadricep, hamstring, glute, calf, ab } from './exercises';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dumbbell Randomizer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
