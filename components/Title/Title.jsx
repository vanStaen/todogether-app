import { StyleSheet, Text } from "react-native";

export const Title = () => {
  return (
    <>
      <Text style={styles.title}>Todogether App </Text>
      <Text style={styles.motto}>Multiplayer-todolists</Text>
    </>
  );
};

const styles = StyleSheet.create({
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
