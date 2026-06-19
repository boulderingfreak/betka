import { Pressable, StyleSheet, Text, View } from "react-native";
import DropdownComponent from "../../components/DropDownMenu";
import gyms from "../../data/gyms";
import { useState } from "react";

export default function Test() {
  const [disable, setDisabled] = useState(true);
  return (
    <View style={styles.background}>
      <DropdownComponent
        disable={disable}
        ownData={gyms}
        iconName={"location-pin"}
        menuLabel="Ścianka"
        marginLeft={8}
      />
      <Pressable
        onPress={() => {
          setDisabled(false);
        }}
      >
        <Text style={{ fontSize: 30 }}>click me</Text>
      </Pressable>
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
