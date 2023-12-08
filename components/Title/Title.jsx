import { StyleSheet, Text, View } from "react-native";

export const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Todogether App </Text>
      <Text style={styles.motto}>Multiplayer-todolists</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    border: "1px solid red",
    alignItems: "center",
  },
  title: {
    opacity: 0.5,
    fontWeight: "500",
    fontSize: 20,
  },
  motto: {
    opacity: 0.5,
    fontWeight: "200",
    fontSize: 20,
  },
});
