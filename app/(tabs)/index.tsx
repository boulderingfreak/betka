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
//* -label "ostatnio dodane"
//* -stworzyć komponent "boulderCard" (4)
//* -naprawić (Tabs) - probuje wstrzymać custom czcionkę najpierw
//* -https://docs.expo.dev/router/advanced/tabs/ -> tutaj mam odpowiedz na buga, brakuje jednego pliku layout
//* -add example bottom navigation

//TODO:

// -logo: fix in GIMP

// -filters:
// -fix UI
// -create DropDownMenu DATA js file (Scianka -> all gyms, Sektor -> all sectors of this GYM, Poziom -> all levels of this gym, IMG URI for GymMap2dImage (modal?)

// -convert boulderCardsBox view into scrollview ( https://reactnative.dev/docs/scrollview )
// ScrollView renders all its react child components at once, but this has a performance downside.
// This is where FlatList comes into play. FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.
// -so convert into FLATLIST instead https://reactnative.dev/docs/flatlist
// -create data BoulderCard DATA js file (img uri (source), user_avatar img uri, name of boulder, )

import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { theme } from "../../styles/theme";
import DropdownComponent from "../../components/DropDownMenu";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import BoulderCard from "../../components/BoulderCard";

SplashScreen.preventAutoHideAsync();

export default function MainBetka() {
  const [loaded, error] = useFonts({
    "BarlowCondensed-Regular": require("../../assets/fonts/Barlow/Condensed/BarlowCondensed-Regular.ttf"),
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
          source={require("../../assets/img/betka_logo_dark.png")}
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
      <ScrollView contentContainerStyle={styles.boulderCardsBox}>
        <BoulderCard />
        <BoulderCard />
        <BoulderCard />
        <BoulderCard />
      </ScrollView>
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
    backgroundColor: "pink",
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
