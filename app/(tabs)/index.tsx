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
//* -logo: fix in GIMP

//TODO:

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
import Feather from "@expo/vector-icons/Feather";
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
        <View style={{ opacity: 1 }}>
          <DropdownComponent iconName={"location-pin"} menuLabel="Ścianka" />
        </View>

        <View style={{ opacity: 0.4 }}>
          <DropdownComponent iconName={"map"} menuLabel="Sektor" />
        </View>

        <View style={{ opacity: 0.4 }}>
          <DropdownComponent iconName={"bar-graph"} menuLabel="Poziom" />
        </View>

        <View style={{ opacity: 0.4 }}>
          <Feather name="map" size={40} color="black" />
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
    backgroundColor: "white",
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
    padding: 12,
  },
  headerText: {
    // color: "white",
    fontSize: 42,
    fontFamily: "BarlowCondensed-Regular",
    marginBottom: 10,
    marginLeft: 10,
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: "stretch",
  },
  dropDownMenuBox: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: 12,
    gap: 10,
  },
  recentlyAddBox: {
    backgroundColor: "pink",
    padding: 12,
  },
  recentlyAddText: {
    fontSize: 28,
    fontFamily: "BarlowCondensed-Regular",
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
