import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import DropdownComponent from "../../components/filters/GymFilter";
import gyms from "../../data/gyms";
import { useState } from "react";
import GymsFilter from "../../components/filters/GymFilter";

//TODO
//* Zamień funkcje strzałkową na zwykłą

export default function Test() {
  const [selectedGym, setSelectedGym] = useState("");

  // handleGymChange: (item: { label: string; value: string }) => void;

  function handleGymChange(item: { label: string; value: string }) {
    console.log("Abc");
    setSelectedGym(item.value);
    console.log(item.label);
    console.log(item.value);
  }

  return (
    <View style={styles.background}>
      <View>
        <Image
          style={{ width: 150, height: 150 }}
          src={
            "https://pub-672397cd77d34b5b9220ad364a4bdd6a.r2.dev/gyms/obiekto/pion/5_czerwona/5_czerwona.png"
          }
        />

        <Text
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            fontSize: 20,
            color: "white",
          }}
        >
          Some text
        </Text>
      </View>
      <View>
        <Image
          style={{ width: 150, height: 150 }}
          src={
            "https://pub-672397cd77d34b5b9220ad364a4bdd6a.r2.dev/gyms/obiekto/pion/5_czerwona/5_czerwona.png"
          }
        />

        <View style={styles.textLevelBox}>
          <Text style={{ color: "white" }}>Some text</Text>
        </View>
      </View>
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
