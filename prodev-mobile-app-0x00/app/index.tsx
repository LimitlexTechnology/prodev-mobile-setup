import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Entry Screen - Awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  largeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  mediumText: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 10,
  },
});
