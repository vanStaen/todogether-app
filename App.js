import { StyleSheet, View } from 'react-native';
import { Title } from './components/Title/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
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
});
