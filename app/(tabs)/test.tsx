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
      {/* <GymsFilter
        // handleGymChange={(item) => {
        //   setSelectedGym(item.value);
        //   console.log(item.value);
        // }}
        handleGymChange={handleGymChange}
        disable={false}
        data={gyms}
        menuLabel="Ścianka"
        marginLeft={8}
      />
      <Pressable
        onPress={() => {
          console.log(selectedGym);
          console.log(gyms[0].sectors);
        }}
      >
        <Text style={{ fontSize: 30 }}>show selected gym</Text>
      </Pressable> */}

      <View>
        <Image
          style={{ width: 300, height: 300 }}
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
            fontSize: 30,
          }}
        >
          Some text
        </Text>
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
});
