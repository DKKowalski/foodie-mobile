// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>I am working </Text>
        <Text style={styles.text}>Hello World!</Text>
        <Text style={styles.text}>Don't go!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#153d6c",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  text: {
    color: "white",
  },
});
