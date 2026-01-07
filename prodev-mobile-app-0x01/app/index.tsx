import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  mediumText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  smallText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});
