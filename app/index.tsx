// feat:     nowa funkcjonalność
// fix:      naprawa buga
// style:    zmiana wyglądu/CSS
// refactor: reorganizacja kodu bez zmiany działania
// chore:    konfiguracja, zależności, pliki pomocnicze
// docs:     dokumentacja

// git add .
// git commit -m "chore: add videos folder with example mp4"
// git push

//* 13.06 - betka
//* -dodać font

//TODO:
//* -label "ostatnio dodane"
// -stworzyć komponent "boulderCard" (4)
// -bottom navigation
// -poprawić logo
// -poprawić filtry

import { StyleSheet, View, Image, Text } from "react-native";
import { theme } from "../styles/theme";
import DropdownComponent from "../components/DropDownMenu";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import BoulderCard from "../components/BoulderCard";

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
      <View style={styles.headerBox}>
        <Image
          style={styles.logo}
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
      <View style={styles.recentlyAddBox}>
        <Text style={styles.recentlyAddText}>Ostatnio dodane</Text>
      </View>
      <View style={styles.boulderCardsBox}>
        <BoulderCard />
        <BoulderCard />
        <BoulderCard />
        <BoulderCard />
      </View>
      {/* <View style={styles.headerBox}>
        <Text style={styles.headerText}>Latest Bouldersaaa</Text>
      </View>
      <View style={styles.latestBoulders}>
        <Image
          style={styles.logo}
          source={require("../assets/img/miniatures/fiolet.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/img/miniatures/fiolet.png")}
        />
        <Image
          style={styles.logo}
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
  headerBox: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    // color: "white",
    fontSize: 42,
    fontFamily: "BarlowCondensed-Regular",
  },
  logo: {
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
  recentlyAddBox: {
    backgroundColor: "pink",
  },
  recentlyAddText: {
    fontSize: 28,
    fontFamily: "BarlowCondensed-Regular",
  },
  latestBoulders: {
    backgroundColor: "lightgray",
    // flex: 5,
    flexDirection: "row",
    gap: 30,
    // height: "70%",
  },
  boulderCardsBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    marginBottom: 16,
    gap: 16,
    justifyContent: "center",
  },
});
