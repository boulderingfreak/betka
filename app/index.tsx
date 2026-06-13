// git add .
// git commit -m "what I did"
// git push

//* 13.06 - betka

// -dodać font

import { StyleSheet, View, Image, Text } from "react-native";
import { theme } from "../styles/theme";
import DropdownComponent from "../components/dropdownmenu";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function MainBetka() {
  const [loaded, error] = useFonts({
    "BarlowCondensed-Regular": require("../assets/fonts/Barlow/Condensed/BarlowCondensed-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles}></View>
        <Image
          style={styles.image}
          source={require("../assets/img/betka_logo_dark.png")}
        />
        <Text style={styles.headerText}>betka</Text>
      </View>
      <View style={styles.dropDownMenuBox}>
        <View style={{ width: "32%", height: 10, backgroundColor: "pink" }}>
          <DropdownComponent iconName={"location-pin"} menuLabel="Ścianka" />
        </View>
        <View style={{ width: "30%", height: 10 }}>
          <DropdownComponent iconName={"map"} menuLabel="Sektor" />
        </View>
        <View style={{ width: "35%", height: 10 }}>
          <DropdownComponent iconName={"bar-graph"} menuLabel="Poziom" />
        </View>
        <View>
          <Entypo name="map" size={24} color="black" />
        </View>
      </View>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Latest Bouldersaaa</Text>
      </View>
      <View style={styles.latestBoulders}>
        <Image
          style={styles.image}
          source={require("../assets/img/miniatures/fiolet.png")}
        />
        <Image
          style={styles.image}
          source={require("../assets/img/miniatures/fiolet.png")}
        />
        <Image
          style={styles.image}
          source={require("../assets/img/miniatures/fiolet.png")}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // backgroundColor: theme.colorDarkGray,
    marginTop: 40,
    marginBottom: 40,
    flex: 1,
    // alignItems: "stretch",
    // justifyContent: "center",
  },
  header: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    // color: "white",
    fontSize: 42,
    fontFamily: "BarlowCondensed-Black",
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "stretch",
  },
  dropDownMenuBox: {
    backgroundColor: "yellow",
    flexDirection: "row",
    padding: 10,
    height: 60,
    // gap: 6,
    // height: "10%",
  },
  latestBoulders: {
    backgroundColor: "lightgray",
    // flex: 5,
    flexDirection: "row",
    gap: 30,
    // height: "70%",
  },
});
