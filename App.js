import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import bgImage from "./assets/PhotoBG.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.otf"),
  });
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
        height: 549,
        left: 0,
        top: 263,

        // background: "#FFFFFF",
        borderRadius: 25,
      }}
    >
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
