import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground, Dimensions, View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: 'rgba(0,0,0,0.3)', // Optional: Adds a dark overlay for better text visibility
  },
  companyLogo: {
    alignItems: "center",
    marginTop: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  textSmall: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  buttonGroup: {
    gap: 15,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  transparentButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
});
