import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// import TestComponent from "../../components/TestBoxOne";
import { useState } from "react";

//TODO

//* -

export default function Test() {
  const [actualState, setActualState] = useState("Initial State");

  return (
    <View style={styles.background}>
      {/* <TestComponent text={actualState} /> */}
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
  textLevelBox: {
    position: "absolute",
    padding: 5,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: "pink",
  },
});
