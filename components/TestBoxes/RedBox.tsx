import { router } from "expo-router";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

type TestComponentProps = {
  text: string;
};

const TestComponent = (props: TestComponentProps) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <Text style={{ fontSize: 32 }}>{props.text}</Text>
    </View>
  );
};

export default TestComponent;

const styles = StyleSheet.create({});
