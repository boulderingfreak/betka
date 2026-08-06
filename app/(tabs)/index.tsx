import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Pressable,
} from "react-native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import BoulderCard from "../../components/BoulderCard";
import GymsFilter from "../../components/filters/GymFilter";
import SectorFilter from "../../components/filters/SectorFilter";
import LevelFilter from "../../components/filters/LevelFilter";
import lightMode from "../../styles/theme";

import gyms from "../../data/gyms";

import boulders from "../../data/boulders";

export default function MainBetka() {
  // const [lightMode, setlightMode] = useState(true);

  const [disableSectors, setDisableSectors] = useState(true);
  const [disableLevels, setDisableLevels] = useState(true);

  const [selectedGym, setSelectedGym] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [actualBoulders, setFiltredBoulders] = useState(boulders);

  function handleGymChange(item: { label: string; value: string }) {
    setSelectedGym(item.value);
    console.log(`Gym name:  ${item.label} (item.label)`);
    console.log(`Gym ID: ${item.value} (item.value)`);

    setDisableSectors(false);
    setDisableLevels(false);

    console.log(`Unlocking sectors and levels...`);

    // filterByGym by name
    filterByGym(item.label);

    switch (item.value) {
      case "0":
        console.log(`selected gym = OBIEKTO`);
        console.log("Loading OBIEKTO sectors..."); //? OBIEKTO
        console.log("Loading OBIEKTO levels...");
        break;
      case "1":
        console.log(`selected gym = CRUX`);
        console.log("Loading CRUX sectors..."); //? CRUX
        console.log("Loading CRUX levels...");
        break;
      case "2":
        console.log(`selected gym = VOLT`);
        console.log("Loading VOLT sectors..."); //? VOLT
        console.log("Loading VOLT levels...");
        break;
      default:
        console.log(`this will never happen`);
    }
  }

  function handleSectorChange(item: { label: string; value: string }) {
    setSelectedSector(item.value);
    console.log(`Sector name: ${item.label}`);
    console.log(`Sector ID: ${item.value}`);

    // filter by sector
    filterBySector(item.label);
  }

  function handleLevelChange(item: { label: string; value: string }) {
    setSelectedLevel(item.value);
    console.log(`Level name: ${item.label}`);
    console.log(`Level ID: ${item.value}`);

    // filter by level
    filterByLevel(item.label);
  }

  function filterByGym(gym: string) {
    const filtredByGym = boulders.filter((item) => item.gym === gym); //* ---------------------- pamietaj tu jest boulders.filter
    setFiltredBoulders(filtredByGym);
    console.log("Filtred by gym");
  }

  function filterBySector(sector: string) {
    const filtredBySector = actualBoulders.filter(
      //* ---------------------- pamietaj tu jest actualBoulders.filter
      (item) => item.sector === sector,
    );

    setFiltredBoulders(filtredBySector);
    console.log("Filtred by sector");
  }

  function filterByLevel(level: string) {
    const filtredByLevel = actualBoulders.filter(
      //* ---------------------- pamietaj tu jest actualBoulders.filter
      (item) => item.level === level,
    );

    setFiltredBoulders(filtredByLevel);
    console.log("Filtred by level");
  }

  function resetFilters() {
    setDisableSectors(true);
    setDisableLevels(true);
    setSelectedGym("");
    setSelectedSector("");
    setSelectedLevel("");
    setFiltredBoulders(boulders);
  }

  return (
    <SafeAreaView style={styles.background} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={44} color="black" />
        <Text style={styles.headerText}>Cześć, 0123456789123456!</Text>
      </View>
      <View style={styles.dropDownMenuBox}>
        <GymsFilter
          handleGymChange={handleGymChange}
          disable={false}
          data={gyms}
          menuLabel="Ścianka"
          marginLeft={8}
          selectedGym={selectedGym}
        />

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
          <SectorFilter
            handleSectorChange={handleSectorChange}
            disable={disableSectors}
            data={gyms[Number(selectedGym)].sectors}
            menuLabel="Sektor"
            marginLeft={8}
            selectedSector={selectedSector}
          />
        </View>

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
          <LevelFilter
            handleLevelChange={handleLevelChange}
            disable={disableLevels}
            data={gyms[Number(selectedGym)].levels}
            menuLabel="Poziom"
            marginLeft={8}
            selectedLevel={selectedLevel}
          />
        </View>

        <View style={[!disableSectors ? { opacity: 1 } : { opacity: 0.2 }]}>
          <Pressable onPress={resetFilters}>
            <Image
              style={styles.imgIcon}
              src="https://pub-672397cd77d34b5b9220ad364a4bdd6a.r2.dev/imgs/filter-reset-svgrepo-com.png"
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.flatListBox}>
        <FlatList
          data={actualBoulders}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => (
            <BoulderCard
              id={item.id}
              imgSrc={item.imgSrc}
              gym={item.gym}
              sector={item.sector}
              level={item.level}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: lightMode.bgDark,
    flex: 1,
  },
  header: {
    // backgroundColor: "yellow",
    flex: 0,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    gap: 6,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "BarlowCondensed-Regular",
  },
  dropDownMenuBox: {
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  sectorsOpacityActive: {
    opacity: 0.2,
  },
  sectorsOpacityUnactive: {
    opacity: 1,
  },
  imgIcon: {
    height: 40,
    width: 40,
  },

  flatListBox: {
    flex: 7,
    // backgroundColor: "blue",
  },

  contentContainerStyle: {
    // backgroundColor: "cyan",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 12,
    justifyContent: "center",
  },
});
