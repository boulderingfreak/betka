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
// -font
// 15.06 note: first method (useFonts useEffect) is not working inside component so trying other way to implement custom font
// google -> https://javascript.plainenglish.io/add-custom-fonts-in-expo-2025-guide-3611083cddf1 -> this

// 16.06 - 2025 method dont work for me, trying once again old one https://docs.expo.dev/develop/user-interface/fonts/
// -testing font implement method in smaller component (BoulderCard)
// -IT WORKS IN SMALLER component!
// -bug fixed: font was loading correctly in both components but in DropDownMenu.tsx additional fontWeight: "bold" was making the problem
// -now lets try to make function for loading this font because i will probably use it in many different places

// Function vs Component vs Hook

// "I want to use this as  <Something />" - create Component
// "I want to use this as  const value = useSomething()" - create Hook

// -fix UI to end level - focused/unfocused

// -create DropDownMenu DATA js file (Scianka -> all gyms, Sektor -> all sectors of this GYM, Poziom -> all levels of this gym, IMG URI for GymMap2dImage (modal?)

// -convert boulderCardsBox view into scrollview ( https://reactnative.dev/docs/scrollview )
// ScrollView renders all its react child components at once, but this has a performance downside.
// This is where FlatList comes into play. FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.
// -so convert into FLATLIST instead https://reactnative.dev/docs/flatlist
// -create data BoulderCard DATA js file (img uri (source), user_avatar img uri, name of boulder, )

import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import DropdownComponent from "../../components/DropDownMenu";
import Feather from "@expo/vector-icons/Feather";
import BoulderCard from "../../components/BoulderCard";
import { useLoadFonts } from "../../hooks/useLoadFonts";

export default function MainBetka() {
  useLoadFonts();
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

        <View style={{ opacity: 0.2 }}>
          <DropdownComponent iconName={"map"} menuLabel="Sektor" />
        </View>

        <View style={{ opacity: 0.2 }}>
          <DropdownComponent iconName={"bar-graph"} menuLabel="Poziom" />
        </View>

        <View style={{ opacity: 0.2 }}>
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
