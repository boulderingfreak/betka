import { StyleSheet, Text, View } from "react-native";


export default function mainPage() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
});
