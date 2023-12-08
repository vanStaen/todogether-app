import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todogether App </Text>
      <Text style={styles.motto}>Multiplayer-todolists</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d6cb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    opacity: .5,
    fontWeight: "500",
    fontSize: 20,
  },
  motto: {
    opacity: .5,
    fontWeight: "200",
    fontSize: 20,
  },
});
