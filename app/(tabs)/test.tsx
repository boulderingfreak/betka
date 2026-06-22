import { Pressable, StyleSheet, Text, View } from "react-native";
import DropdownComponent from "../../components/GymFilter";
import gyms from "../../data/gyms";
import { useState } from "react";
import GymsFilterComponent from "../../components/GymFilter";

export default function Test() {
  const [disable, setDisabled] = useState(true);
  return (
    <View style={styles.background}>
      <GymsFilterComponent
        disable={false}
        ownData={gyms}
        iconName={"location-pin"}
        menuLabel="Ścianka"
        marginLeft={8}
        // passValue={handleValue}
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
